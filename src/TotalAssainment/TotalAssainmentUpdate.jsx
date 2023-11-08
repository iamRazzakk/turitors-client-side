import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const TotalAssainmentUpdate = () => {
    const { id } = useParams();

    // const [assignment, setAssignment] = useState(updateData);

    useEffect(() => {
        // Fetch the assignment data when the component mounts
        fetch(`http://localhost:5000/createAssainment/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data); 
                setAssignment(data);
            })
            .catch((error) => console.error("Error fetching assignment:", error));
    }, [id]);


    const handleUpdateData = (e) => {
        e.preventDefault();
        const form = e.target
        const updateData = {
            title: form.title.value,
            difficulty: form.difficulty.value,
            description: form.description.value,
            marks: form.marks.value,
            url: form.url.value
        }
        fetch(`http://localhost:5000/createAssainment/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
        })
            .then((response) => {
                if (response.status === 200) {
                    toast.success("Assignment updated successfully!");
                } else {
                    toast.error("Failed to update assignment.");
                }
            })
            .catch((error) => {
                console.error("Error updating assignment:", error);
                toast.error("Failed to update assignment.");
            });
    };
    return (
        <div>
            <div className="bg-gradient-to-r from-[#f1e7e7] text-black to-[#87ceeb]">
                <h1 className="text-3xl font-bold text-center mt-5 mb-5 text-black">
                    Update Assignment
                </h1>

                <form onSubmit={handleUpdateData}>
                    <div className="flex">
                        <div className="relative z-0 w-full flex-1 mb-6 group">
                            <input type="text" name="title" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                        </div>
                        <div className="flex-1 ml-4">
                            <label >Assignment difficulty level:</label>
                            <select name="difficulty" className="w-full text-white bg-none" id="cars">
                                <option value="Easy" selected>Easy</option>
                                <option value="Medium" >Medium</option>
                                <option value="Hard" >Hard</option>
                            </select>
                        </div>
                    </div>
                    {/*  */}


                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="description" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">description</label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input type="url" name="url" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image Url</label>

                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="marks" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">marks</label>
                    </div>
                    <p className="text-center">
                        <button type="submit" className="btn bg-gradient-to-r from-[#f1e7e7] text-black to-[#89d9f9]">
                            Submit
                        </button>
                    </p>
                </form>
                <Toaster />
            </div>
        </div>
    );
};

export default TotalAssainmentUpdate;
