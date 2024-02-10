import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase.config";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const SingIn = () => {
    const { loginWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLoginWithGoogle = () => {
        loginWithGoogle(auth, GoogleAuthProvider)
            .then(result => {
                const user = result.user
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    background:"3d90e9",
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "Sign in successfully"
                });

                navigate('/')
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);
        SingIn(email, password)
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
                    title: "Sign in successfully"
                });

                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="px-6">
            <Helmet>
                <title>Turitors || Login Page</title>
            </Helmet>
            <div className="w-full  md:w-1/2 md:mx-auto bg-blue-200 p-4 m-4 rounded-lg shadow-lg">
                <form onSubmit={handleLogin} className="card-body">
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
                    <div className="form-control mt-6">
                        <button className="bg-[#3d90e9] text-white py-3 rounded-full button">Login</button>
                    </div>
                    <h1 className="text-center font-bold">Not a Member<Link className="text-blue-500" to={'/singup'}> Register</Link></h1>
                    <hr className="bg-black" />
                    <p className="text-2xl flex gap-4 mx-auto cursor-pointer"><FcGoogle onClick={handleLoginWithGoogle} className=""></FcGoogle>
                        <FaGithub className="bg-black rounded-full"></FaGithub></p>
                </form >
            </div >
        </div>
    );
};

export default SingIn;