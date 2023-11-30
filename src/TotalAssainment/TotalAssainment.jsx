import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/shared/Loader/Loader";
import AssinmentDetail from "../components/Category/AssinmentDetail";
// import AssinmentDetail from "../components/Category/AssinmentDetail";

const TotalAssainment = () => {
    const [assignments, setAssignments] = useState([]);
    const [Difficulty, setDifficulty] = useState(null);
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [currentPage, setCurrentPage] = useState(0)
    const itemPage = 6
    const indexOfLastAssignment = (currentPage + 1) * itemPage;
    const indexOfFirstAssignment = indexOfLastAssignment - itemPage
    const currentAssignment = assignments.slice(indexOfFirstAssignment, indexOfLastAssignment)

    useEffect(() => {
        fetch("http://localhost:5000/createAssainment")
            .then((response) => response.json())
            .then((data) => setAssignments(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const filterAssignments = (difficulty) => {
        setDifficulty(difficulty);
    };
    const handleAssingmentSelection = assignment => {
        setSelectedAssignment(assignment);
    }

    const filteredAssignments = Difficulty
        ? assignments.filter(assignment => assignment.difficulty === Difficulty)
        : assignments;

    return (
        <div>
            <div className="">
                <h1 className="text-3xl font-bold text-center">All Assignments</h1>

                {/* Difficulty Filter Buttons */}
                <div className="flex justify-center space-x-4 mt-4">
                    <button className="btn btn-outline btn-primary" onClick={() => filterAssignments("Easy")}>Easy</button>
                    <button className="btn btn-outline btn-primary" onClick={() => filterAssignments("Medium")}>Medium</button>
                    <button className="btn btn-outline btn-primary" onClick={() => filterAssignments("Hard")}>Hard</button>
                </div>

                <div className="">
                    {currentAssignment.length === 0 ? (
                        <>
                            <div className="flex justify-center items-center text-5xl">
                                <Loader></Loader>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                                {currentAssignment?.map(assignment => (
                                    <ul key={assignment._id}>
                                        <div className="h-[450px] mt-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            <img
                                                className="rounded-t-lg h-44 w-full object-cover"
                                                src={assignment?.url}
                                                alt=""
                                            />
                                            <div className="p-5 h-20">
                                                <a>
                                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                        {assignment.title}
                                                    </h5>
                                                </a>
                                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                    {assignment.description}
                                                </p>

                                                <div className="md:mr-6">
                                                    <Link to={`/assignmentDetail/${assignment._id}`}>
                                                        <button onClick={() => handleAssingmentSelection(assignment)} className="btn btn-outline btn-success">View </button>
                                                    </Link>
                                                    <Link to={`/updateAssignment`}>
                                                        <button className="btn btn-outline btn-info md:ml-6">Update</button>
                                                    </Link>
                                                </div>

                                            </div>
                                        </div>
                                    </ul>
                                ))}
                                
                            </div>
                        </>
                    )}
                </div>
                <nav className='flex items-center justify-center pt-20'>
                                    {[...Array(Math.ceil(assignments?.length / itemPage)).keys()].map(
                                        (page) => (
                                            <button
                                                key={page}
                                                type='button'
                                                className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${currentPage === page
                                                    ? 'bg-gray-200 text-gray-800'
                                                    : 'border border-gray-200 text-gray-800 hover:bg-gray-100'
                                                    } py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500`}
                                                onClick={() => setCurrentPage(page)}
                                            >
                                                {page + 1}
                                            </button>
                                        )
                                    )}
                                </nav>
            </div>
        </div>
    );
};

export default TotalAssainment;
