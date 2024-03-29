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
    const navLink = <>
        <ul className="bg-white md:flex gap-6 text-[#3d90e9]">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold" : "font-normal"
                    }
                >
                    Home
                </NavLink>
            </li>
            {
                user && <li>
                    <NavLink
                        to="/addCourse"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold" : "font-normal"
                        }
                    >
                        Create Assignment
                    </NavLink>
                </li>
            }
            <li>
                <NavLink
                    to="/createAssainment"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold" : "font-normal"
                    }
                >
                    Assignments
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/submitedAssignment"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "font-bold" : "font-normal"
                    }
                >
                    Submitted Assignment
                </NavLink>
            </li>
            {
                user && <li>
                    <NavLink
                        to="/myassignment"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold" : "font-normal"
                        }
                    >
                        My Assignment
                    </NavLink>
                </li>
            }
        </ul>


    </>

    return (
        <div className="navbar px-5 bg-white text-black  w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-[#3d90e9] rounded-box w-52">
                        <li className="menu menu-horizontal px-1 font-bold">
                            {navLink}
                        </li>
                    </ul>
                </div>
                <img className="w-24" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" bg-white text-[#3d90e9] menu-horizontal px-1 font-bold">

                    {
                        navLink
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex justify-center items-center">

                    {/* <p className="md:mr-4">{user?.displayName}</p> */}
                </div>
                {user?.email ? <>
                    <img className="w-12 h-12 rounded-full md:ml-4" src={user?.photoURL} alt="" />
                    <button onClick={handleLogout} className="px-10 bg-[#3d90e9] text-white py-2 rounded-full md:ml-4">Logout</button>
                </> : <>
                    <Link to='/login'>
                        {/* <button className="px-10">Login</button> */}
                        <button className="px-10 bg-[#3d90e9] py-2 text-white rounded-full md:ml-4">Login</button>
                    </Link>
                </>}
            </div>

        </div>
    );
};

export default Navbar;