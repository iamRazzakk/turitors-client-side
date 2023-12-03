import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/shared/Loader/Loader";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const TotalAssainment = () => {
    // const [assignments, setAssignments] = useState([]);
    const [difficulty, setDifficulty] = useState(null);
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6;

    const handleAssingmentSelection = (assignment) => {
        setSelectedAssignment(assignment);
    };

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://turitors-server-side.vercel.app/createAssainment/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Assignment has been deleted.",
                                icon: "success",
                            });
                        }
                        refetch()
                    });
            }
        });
    };

    const { data: queriedAssignments,refetch } = useQuery({
        queryKey: 'createAssainment',
        queryFn: () => {
            return fetch("https://turitors-server-side.vercel.app/createAssainment")
                .then((res) => res.json());
        },
    });

    const currentAssignments = queriedAssignments || [];

    const filteredAssignments = difficulty
        ? currentAssignments.filter((assignment) => assignment.difficulty === difficulty)
        : currentAssignments;

    const indexOfLastAssignment = (currentPage + 1) * itemsPerPage;
    const indexOfFirstAssignment = indexOfLastAssignment - itemsPerPage;
    const currentDisplayedAssignments = filteredAssignments.slice(
        indexOfFirstAssignment,
        indexOfLastAssignment
    );

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <Helmet>
                <title>Turitors || Total Assignment</title>
            </Helmet>
            <div className="">
                <h1 className="text-3xl font-bold text-center">All Assignments</h1>

                {/* Difficulty Filter Buttons */}
                <div className="flex justify-center space-x-4 mt-4">
                    <button
                        className="btn btn-outline btn-primary"
                        onClick={() => setDifficulty("Easy")}
                    >
                        Easy
                    </button>
                    <button
                        className="btn btn-outline btn-primary"
                        onClick={() => setDifficulty("Medium")}
                    >
                        Medium
                    </button>
                    <button
                        className="btn btn-outline btn-primary"
                        onClick={() => setDifficulty("Hard")}
                    >
                        Hard
                    </button>
                </div>

                <div className="">
                    {currentAssignments.length === 0 ? (
                        <>
                            <div className="flex justify-center items-center text-5xl">
                                <Loader></Loader>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                                {currentDisplayedAssignments.map((assignment) => (
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
                                                        <button
                                                            onClick={() =>
                                                                handleAssingmentSelection(assignment)
                                                            }
                                                            className="btn btn-outline btn-success"
                                                        >
                                                            View
                                                        </button>
                                                    </Link>
                                                    <Link to={`/updateAssignment/${assignment._id}`}>
                                                        <button className="btn btn-outline btn-info md:ml-6">
                                                            Update
                                                        </button>
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(assignment._id)}
                                                        className="btn btn-outline btn-warning ml-6"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <nav className="flex items-center justify-center pt-20">
                    {[...Array(Math.ceil(filteredAssignments?.length / itemsPerPage)).keys()].map(
                        (page) => (
                            <button
                                key={page}
                                type="button"
                                className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${currentPage === page
                                        ? "bg-gray-200 text-gray-800"
                                        : "border border-gray-200 text-gray-800 hover:bg-gray-100"
                                    } py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500`}
                                onClick={() => paginate(page)}
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
