import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/shared/Loader/Loader"

const TotalAssainment = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/createAssainment')
            .then((response) => response.json())
            .then((data) => setAssignments(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold text-center">All Assignments</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {assignments.length === 0 ? <>
                        <Loader></Loader>
                    </> : <>
                        {assignments.map(assignment => (
                            <ul key={assignment._id}>
                                <div className="h-[450px] mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                    <img className="rounded-t-lg h-44 w-full object-cover" src={assignment.url} alt="" />

                                    <div className="p-5 h-20">
                                        <a >
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{assignment.title}</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{assignment.description}</p>
                                        <div>
                                            <Link to={`/assignmentDetail/${assignment._id}`}>
                                                <button className="btn btn-outline">See Detail</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        ))}
                    </>}

                </div>
            </div>
        </div>
    );
};

export default TotalAssainment;
