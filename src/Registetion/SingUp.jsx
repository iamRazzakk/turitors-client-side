import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase.config";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const SingUp = () => {
    const { loginWithGoogle } = useContext(AuthContext)
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLoginWithGoogle = () => {
        loginWithGoogle(auth, GoogleAuthProvider)
            .then(result => {
                const user = result.user
                console.log(user);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Sign Up successfully"
                });

                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value
        const password = form.password.value;
        console.log(name, email, url, password);
        currentUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Sign Up successfully"
                });

            })
            .catch(error => console.log(error))
    }
    return (
        <div className="md:w-1/2 md:mx-auto bg-blue-200 p-4 m-4 rounded-lg shadow-lg">
            <Helmet>
                <title>Turitors || Sing up Page</title>
            </Helmet>
            <h1 className="md:text-2xl text-xl lg:text-3xl text-black text-center font-bold">Sing up Form!</h1>
            <form onSubmit={handleSubmit} className="card-body">
                < div className="form-control" >
                    <label className="label">
                        <span className="label-text text-black font-bold">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered bg-white text-black" required />
                </div >
                < div className="form-control" >
                    <label className="label">
                        <span className="label-text text-black font-bold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Enter your email" className="input input-bordered bg-white text-black" required />
                </div >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black font-bold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Enter your password" className="input input-bordered bg-white text-black" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black font-bold">Image URL</span>
                    </label>
                    <input type="url" name="url" placeholder="Enter img url" className="input input-bordered bg-white text-black" required />
                </div>

                <div className="form-control mt-6">
                    <button className="bg-[#3d90e9] text-white py-3 rounded-full button">Login</button>
                </div>
                <h1 className="text-center font-bold">All ready have an account<Link className="text-blue-500" to={'/login'}> Login</Link></h1>
                <hr className="bg-black" />
                <p className="text-2xl flex gap-4 mx-auto cursor-pointer"><FcGoogle onClick={handleLoginWithGoogle} className="cursor-pointer"></FcGoogle> <FaGithub className="bg-black rounded-full"></FaGithub></p>
            </form >
        </div >
    );
};

export default SingUp;