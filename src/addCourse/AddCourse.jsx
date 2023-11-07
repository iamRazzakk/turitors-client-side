
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";



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
        console.log(title, difficulty, description, marks, url);
        const addData = {
            title: title,
            email: email,
            difficulty: difficulty,
            description: description,
            marks: marks,
            url: url,
        }
        fetch('http://localhost:5000/createAssainment', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(addData)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Assignment added successfully');
                } else {
                    toast.error('Something is missing');
                }
            })

    }
    return (
        <div>

            <div className="bg-gradient-to-r from-[#f1e7e7] text-black to-[#87ceeb]">
                <h1 className="text-3xl font-bold text-center mt-5 mb-5 text-black">Add Assignment</h1>

                <form onSubmit={handleSubmit}>
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
                        <input type="text" name="description" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Add description " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">description</label>
                    </div>
                    {/*  */}
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" defaultValue={`${user?.email}`} name="email" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>


                    <div className="relative z-0 w-full mb-6 group">
                        <input type="url" name="url" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" url" required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image Url</label>

                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="marks" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Marks " required />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">marks</label>
                    </div>
                    <p className="text-center"><button type="submit" className="btn bg-gradient-to-r from-[#f1e7e7] text-black to-[#89d9f9]">Submit</button></p>
                </form>
                <Toaster></Toaster>

            </div>
        </div>
    );
};

export default AddCourse;