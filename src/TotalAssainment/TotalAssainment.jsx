import { useEffect, useState } from "react";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";


const TotalAssainment = () => {
    const [assignments, setAssainments] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/createAssainment`) // Replace with the correct API endpoint
            .then((response) => response.json())
            .then((data) => setAssainments(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, [])
    return (
        <div>
            <Navbar></Navbar>

            <div>
                <h1>All Assignments</h1>
                <ul>
                    <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {assignments.map(assignment => (
                            <li key={assignment._id}>

                                <div className="h-96 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <a href="#">
                                        <img className="rounded-t-lg w-full h-36 object-cover" src={assignment.url} alt="" />
                                    </a>
                                    <div className="p-5 h-20">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{assignment.title}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{assignment.description}</p>
                                        <div className="
                                        ">
                                            <Link>
                                                <button className="btn btn-outline">See Detail</button>
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                            </li>
                        ))}
                    </div>
                </ul>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default TotalAssainment;