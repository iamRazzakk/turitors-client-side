

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const SubmitedAssignment = () => {
    const [submittedAssignment, setSubmittedAssignment] = useState();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('https://turitors-server-side.vercel.app/submitedAssignment')
            .then(res => res.json())
            .then(data => setSubmittedAssignment(data))
        // .then(data => console.log(data))
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const mark = form.mark.value;
        const feedback = form.feedback.value;
        console.log(mark, feedback);
        const markFeedback = {
            mark: mark,
            feedback: feedback,
            status: 60,
        };
        axios.post('https://turitors-server-side.vercel.app/markFeedback', markFeedback, {
            headers: {
                'content-type': 'application/json',
            },
        })
            .then(response => {
                if (response.data.acknowledged) {
                    toast.success('Assignment added successfully');
                } else {
                    toast.error('Something is missing');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error('An error occurred while adding the assignment');
            });
    };

    return (
        <div className="p-6">
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Examinee</th>
                        <th>Total Marks</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {submittedAssignment?.map((assignment, index) => (
                        <tr key={assignment._id}>
                            <td>{index + 1}</td>
                            <td>{user.displayName}</td>
                            {/* <td>{user.title}</td> */}
                            <td>{assignment.status}</td>
                            <td>
                                <button
                                    className="btn"
                                    onClick={() => document.getElementById('my_modal_5').showModal()}
                                >
                                    Give mark
                                </button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <form onSubmit={handleSubmit} className="modal-box bg-gradient-to-r from-[#f1e7e7] text-black  to-[#87ceeb]">
                                        <a target="_blank" className="font-bold text-lg">PDF: {assignment.pdf}</a>
                                        <p className="py-4">{assignment?.Note}</p>
                                        Mark: <input className="p-4 rounded-lg bg-white text-black" type="number" name="mark" id="" /> <br /> <br />
                                        Feedback: <input className="p-4 rounded-lg bg-white text-black" type="text" name="feedback" id="" /> <br />
                                        <button className="btn btn-outline btn-success">Submit</button>
                                        <div className="modal-action">
                                            <div method="dialog">
                                                <button type="button" className="btn" onClick={() => document.getElementById('my_modal_5').close()}>Close</button>
                                            </div>
                                        </div>
                                    </form>
                                </dialog>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SubmitedAssignment;


