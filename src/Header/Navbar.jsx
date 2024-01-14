import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import logo from "../../public/dark-logo.png"


const Navbar = () => {
    const navigate = useNavigate()
    const { logOut, user } = useContext(AuthContext)
    // console.log(user);
    const handleLogout = () => {
        logOut()
        navigate('/login')
    }

    return (
        <div className="navbar px-5 bg-[#4440bf] text-[#ffffff]  w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <ul className="menu menu-horizontal px-1 font-bold">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/addCourse'>Create Assignment</NavLink></li>
                            <li><NavLink to='/createAssainment'>Assignments</NavLink></li>
                            <li><NavLink to='/submitedAssignment'>Submitted Assignment</NavLink></li>
                            <li><NavLink to='/myassignment'>My Assignment</NavLink></li>

                        </ul>
                    </ul>
                </div>
                <img className="w-24" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/addCourse'>Create Assignment</NavLink></li>
                    <li><NavLink to='/createAssainment'>Assignments</NavLink></li>
                    <li><NavLink to='/submitedAssignment'>Submitted Assignment</NavLink></li>
                    <li><NavLink to='/myassignment'>My Assignment</NavLink></li>

                </ul>

            </div>
            <div className="navbar-end">
                <div className="flex justify-center items-center">
                    <img className="w-12 h-12 rounded-full md:ml-4" src={user?.photoURL} alt="" />
                    <p className="md:mr-4">{user?.displayName}</p>
                </div>
                {user?.email ? (
                    <button onClick={handleLogout} className="relative inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Log out</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </button>
                    // <button onClick={handleLogout} className="btn">Logout</button>
                ) : (
                    <Link to='/login'>
                        <button className="relative inline-block text-lg group">
                            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span className="relative">Log in</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </button>
                    </Link>
                )}
            </div>

        </div>
    );
};

export default Navbar;


// 
{/*  */ }

// 