import { Link, Navigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase.config";

const SingIn = () => {
    const { signIn, loginWithGoogle } = useContext(AuthContext)
    const handleLoginWithGoogle = () => {
        loginWithGoogle(auth, GoogleAuthProvider)
            .then(result => {
                const user = result.user
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
                if (user) {
                    <Navigate to={'/'}></Navigate>
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="w-1/2 mx-auto bg-blue-200 p-4 m-4 rounded-lg shadow-lg">
            <form onSubmit={handleLogin} className="card-body">
                < div className="form-control" >
                    <label className="label">
                        <span className="label-text text-black font-bold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                </div >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black font-bold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-blue-200 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded transition duration-300">Login</button>
                </div>
                <h1 className="text-center font-bold">Not a Member<Link className="text-blue-500" to={'/singup'}> Register</Link></h1>
                <hr className="bg-black" />
                <p className="text-2xl flex gap-4 mx-auto"><FcGoogle onClick={handleLoginWithGoogle} className=""></FcGoogle> <FaGithub className="bg-black rounded-full"></FaGithub></p>
            </form >
        </div >
    );
};

export default SingIn;