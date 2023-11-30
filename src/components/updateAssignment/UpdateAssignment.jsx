import { Toaster } from "react-hot-toast";

const UpdateAssignment = () => {
    return (
        <div>

            <div className="bg-gradient-to-r from-[#f1e7e7] text-black to-[#87ceeb]">
                <h1 className="text-3xl font-bold text-center mt-5 mb-5 text-black">Update</h1>
                <form className="card-body">
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
                        <input type="text" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Marks</span>
                        </label>
                        <input type="text" name="marks" placeholder="Marks" className="input input-bordered" required />
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
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
                <Toaster></Toaster>

            </div>
        </div>
    );
};

export default UpdateAssignment;