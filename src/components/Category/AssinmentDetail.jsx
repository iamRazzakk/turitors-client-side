// import { Link, useLoaderData } from "react-router-dom";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const AssinmentDetail = () => {
    // const data=useLoaderData()
    const [data, setData] = useState()
    console.log(data);
    const { id } = useParams()
    console.log(id);
    useEffect(() => {
        fetch(`http://localhost:5000/createAssainment/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    return (
        <div className="">
            <div className="card card-side bg-gradient-to-r from-[#f1e7e7] text-black  to-[#87ceeb] shadow-xl">
                <figure><img src={data?.url} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Title: {data?.title}</h2>
                    <p>Description: {data?.description}</p>
                    <p>Mark: {data?.marks}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
            <Link to='/addCourse'>
                <button>Take Assignment</button>
            </Link>

        </div>
    );
};

export default AssinmentDetail;
// <img className="rounded-t-lg w-full h-44 object-cover" src={assignment?.url} alt={assignment.title} />
{/* <div className="p-5">
<a>
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{assignment.title}</h5>
</a>
<p>{assignment.marks}</p>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{assignment.description}</p>

{/* Display the due date if available */}
// {assignment.dueDate && (
//     <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//         Due Date: {new Date(assignment.dueDate).toLocaleDateString()}
//     </p>
// )}
// </div> */}