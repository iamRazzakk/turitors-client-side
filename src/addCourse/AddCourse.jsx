
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
        const pdf = form.pdf.value;
        console.log(title, difficulty, description, marks, url, dueDate, pdf);
        const addData = {
            title: title,
            email: email,
            difficulty: difficulty,
            description: description,
            marks: marks,
            url: url,
            dueDate: dueDate,
            status: "pending",
            pdf: pdf,
        }
        axios.post('http://localhost:5000/createAssainment', addData, {
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
        <div>
            <Helmet>
                <title>Turitors || Assignment</title>
            </Helmet>
            <div className="bg-gradient-to-r from-[#f1e7e7] text-black to-[#87ceeb]">
                <h1 className="text-3xl font-bold text-center mt-5 mb-5 text-black">Add Assignment</h1>
                <form onSubmit={handleSubmit} className="card-body text-white">
                    <div className="form-control">
                        <div className="flex">
                            <div className="flex-1">
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input type="text" placeholder="Title" name="title" className="input input-bordered" required />
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


                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" defaultValue={`${user?.email}`} placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Marks</span>
                        </label>
                        <input type="text" name="marks" placeholder="Marks" className="input input-bordered" required />
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">PDF URL</span>
                        </label>
                        <input type="url" name="pdf" placeholder="PDF Link" className="input input-bordered" required />
                    </div>

                    <div className="flex">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="url" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="flex-1 ml-4">
                            <label>Date:</label>
                            <input type="date" name="dueDate" className="w-full" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Assignment</button>
                    </div>
                </form>
                <Toaster></Toaster>

            </div>
        </div>
    );
};

export default AddCourse;