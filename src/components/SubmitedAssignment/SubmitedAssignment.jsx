import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubmitedAssignment = () => {
    const [submittedAssignments, setSubmittedAssignments] = useState([]);
    const handleUpdateSubmitMark = e => {
        e.preventDefault();
        const form = e.target
        const updateMark = {
            title: form.title.value,
            marks: form.marks.value,
            feedback: form.feedback.value,
        }
        fetch(`http://localhost:5000/submitedAssignment/:${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateMark),
        })
    }

    useEffect(() => {
        fetch('http://localhost:5000/submitedAssignment')
            .then((response) => response.json())
            .then((data) => {
                setSubmittedAssignments(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {submittedAssignments.map((assignment, index) => (
                <a
                    key={index}
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
                        <Link>
                            <button className="btn btn-outline btn-success" onClick={() => document.getElementById('my_modal_5').showModal()}>
                                Give Mark
                            </button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box bg-white">
                                    <h1 className="md:text-3xl text-center mb-4">Give mark and Feedback</h1>
                                    <form onSubmit={handleUpdateSubmitMark} className="w-full ">
                                        <input type="text" name="marks" placeholder="Mark" className="input input-bordered w-full max-w-xs" />
                                        <textarea className="textarea mt-5" placeholder="Feedback" name="feedback">Feedback</textarea>
                                    </form>
                                    <button className="btn btn-success btn-outline" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </dialog>
                        </Link>

                    </div>
                </a>
            ))}
        </div>
    );
};

export default SubmitedAssignment;
