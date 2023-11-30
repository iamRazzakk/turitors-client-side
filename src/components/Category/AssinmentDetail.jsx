// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

import { Link, useLoaderData } from "react-router-dom";

const AssinmentDetail = () => {
    const detail = useLoaderData()
    console.log(detail);
    // console.log(assignment);
    // const { title, description } = assignment
    // console.log(title,description,"Assignments");
    // const { id } = useParams();
    // const [assignment, setAssignment] = useState(assi);

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/assignmentDetail/${id}`)
    //         .then(res => {
    //             setAssignment(res.data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });
    // }, [id]);

    // if (!assignment) {
    //     return <div className='flex justify-center items-center font-bold text-3xl'>No data Found</div>;
    // }

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <h1>
                {assignment?.title}
            </h1>
            <img src={assignment?.img} alt="" />
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