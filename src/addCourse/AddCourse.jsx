
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";



const AddCourse = () => {
    const { user } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const difficulty = form.difficulty.value;
        const description = form.description.value
        const marks = form.marks.value;
        const url = form.url.value
        const email = form.email.value
        const dueDate = form.dueDate.value;
        console.log(title, difficulty, description, marks, url, dueDate);
        const addData = {
            title: title,
            email: email,
            difficulty: difficulty,
            description: description,
            marks: marks,
            url: url,
            dueDate: dueDate,
            status: '100',
        }
        axios.post('https://turitors-server-side.vercel.app/createAssainment', addData, {
            headers: {
                'Content-Type': 'application/json',
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

    }
    return (
        <div className="md:p-14">
            <Helmet>
                <title>Turitors || Assignment</title>
            </Helmet>
            <div className="">
                <h1 className="text-3xl font-bold text-center text-black md:mb-5">Add Assignment</h1>
                <form onSubmit={handleSubmit} className="card-body  bg-[#3d90e9] rounded-md text-white">
                    <div className="form-control">
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text text-black font-bold">Title</span>
                                </label>
                                <input type="text" placeholder="Title" name="title" className="input input-bordered md:w-full bg-white text-black" required />
                            </div>
                            <div className="flex-1 ">
                                <label className="text-black font-bold">Assignment difficulty level:</label>
                                <select name="difficulty" className="w-full rounded-md md:py-3 md:mt-3 mx-auto text-black bg-white" id="cars">
                                    <option value="Easy" selected>Easy</option>
                                    <option value="Medium" >Medium</option>
                                    <option value="Hard" >Hard</option>
                                </select>
                            </div>
                        </div>


                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-black font-bold">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={`${user?.email}`} placeholder="Email" className="input input-bordered md:w-full bg-white text-black" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="text-black font-bold">Marks</span>
                        </label>
                        <input type="text" name="marks" placeholder="Marks" className="input input-bordered md:w-full bg-white text-black" required />
                    </div>

                    <div className="flex">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="text-black font-bold">Photo URL</span>
                            </label>
                            <input type="url" name="url" placeholder="Photo URL From Imgbb Direct Link" className="input input-bordered md:w-full bg-white text-black" required />
                        </div>
                        <div className="flex-1 ml-4">
                            <label className="text-black font-bold">Date:</label>
                            <input type="date" name="dueDate" className="w-full rounded-md md:py-3 md:mt-3 mx-auto text-black bg-white" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-black font-bold">Description</span>
                        </label>
                        <textarea className="input input-bordered md:w-full bg-white text-black p-3" name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
                        {/* <input type="text" name="description" placeholder="Description" className="input input-bordered md:w-full bg-white text-black md:py-10" required /> */}
                    </div>
                    <div className="form-control mt-6">
                        <button className="bg-white text-black md:py-3 font-bold rounded-lg">Add Assignment</button>
                    </div>
                </form>
                <Toaster></Toaster>

            </div>
        </div>
    );
};

export default AddCourse;