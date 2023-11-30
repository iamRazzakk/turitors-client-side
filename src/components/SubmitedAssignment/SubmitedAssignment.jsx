import axios from "axios";
import { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const SubmitedAssignment = () => {
    const { user } = useContext(AuthContext)
    const [submittedAssignments, setSubmittedAssignments] = useState([]);
    const [seltectedData, setSelectedData] = useState(null)
    const handleCloseModal = () => {
        document.getElementById('my_modal_5').close();
    };
    // console.log(submittedAssignments);
    // const id = submittedAssignments._id
    // console.log(id);

    const isUser = submittedAssignments.filter(use => use?.email === user?.email)
    console.log(isUser);

    const handleUpdateSubmitMark = (e) => {
        e.preventDefault();

        const form = e.target;
        const marks = form.marks.value;
        const feedback = form.feedback.value
        const updateMark = {
            marks: marks,
            feedback: feedback,
        };
        // console.log(submittedAssignments);

        axios.put(`http://localhost:5000/submitedAssignment/${selectedData?._id}`, updateMark, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success("Update complete");
                }
            })
            .catch((error) => {
                console.error(error);
            });
        console.log('submitted');
    }

    useEffect(() => {
        axios.get('http://localhost:5000/submitedAssignment')
            .then((response) => {
                setSubmittedAssignments(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <>
            <Helmet>
                <title>Turitors || Submitted Assignment</title>
            </Helmet>
            <h1 className="text-3xl text-center font-bold md:mb-10">Submitted Assignment</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    isUser ? <>
                        {submittedAssignments.map((assignment, idx) => (
                            <a
                                key={idx}
                                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                <img
                                    className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
                                    src={assignment.url}
                                    alt={assignment.title}
                                />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {assignment.title}
                                    </h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {assignment.textarea}
                                    </p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Mark: {assignment.marks}
                                    </p>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Person : {assignment.email}
                                    </p>

                                    <button className="btn btn-outline btn-success" onClick={() => {
                                        document.getElementById('my_modal_5').showModal()
                                        setSelectedData(assignment)
                                    }}>

                                        Give Mark
                                    </button>
                                    <dialog id="my_modal_5" className="modal text-white modal-bottom sm:modal-middle">
                                        <div className="modal-box bg-white">
                                            <h1 className="md:text-3xl text-black font-bold text-center mb-4">Give mark and Feedback</h1>
                                            <form onSubmit={handleUpdateSubmitMark} className="w-full">
                                                <a
                                                    className="text-black"
                                                    href={assignment.pdf}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Submitted PDF Link:{submittedAssignments.pdf}
                                                </a> <br /> <br />
                                                <input type="text" defaultValue={seltectedData?.marks} name="marks" placeholder="Mark" className="input input-bordered w-full max-w-xs" />
                                                <textarea className="textarea mt-5" defaultValue={seltectedData?.feedback} placeholder="Feedback" name="feedback"></textarea>

                                                <button className="btn btn-success btn-outline" type="submit">
                                                    Submit
                                                </button>
                                                <Toaster></Toaster>
                                            </form>
                                            <button
                                                className="btn btn-outline md:ml-3 btn-warning"
                                                onClick={handleCloseModal}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </dialog>
                                    <dialog id="my_modal_5" className="modal text-white modal-bottom sm:modal-middle">
                                        <div className="modal-box bg-white">
                                            <h1 className="md:text-3xl text-black font-bold text-center mb-4">Give mark and Feedback</h1>
                                            <form onSubmit={handleUpdateSubmitMark} className="w-full">
                                                <a
                                                    className="text-black"
                                                    href={assignment.pdf}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Submitted PDF Link:{submittedAssignments.pdf}
                                                </a> <br /> <br />
                                                <input type="text" name="marks" placeholder="Mark" className="input input-bordered w-full max-w-xs" />
                                                <textarea className="textarea mt-5" placeholder="Feedback" name="feedback"></textarea>

                                                <button className="btn btn-success btn-outline" type="submit">
                                                    Submit
                                                </button>
                                            </form>


                                            <button
                                                className="btn btn-outline md:ml-3 btn-warning"
                                                onClick={handleCloseModal}
                                            >
                                                Close
                                            </button>

                                        </div>
                                    </dialog>


                                </div>
                            </a>
                        ))}
                    </> :
                        <>
                            <h1 className="text-bold text-3xl flex justify-center items-center">Please submit your Assignment</h1>
                        </>
                }

            </div>
        </>
    );
};

export default SubmitedAssignment;