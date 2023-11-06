import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import AssinmentCard from "./AssinmentCard";

const CourseList = () => {
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {
        
        fetch('/Assinment.json')
            .then(res => res.json())
            .then(data => setCourseData(data))
    }, []);

    return (
        <>
            <h1 className='text-3xl text-center font-bold text-black'>Assinmet List</h1>
            <div className="grid md:grid-cols lg:grid-cols-4 gap-5 mx-auto">

                {courseData?.map((course, idx) => (
                    <AssinmentCard course={course} key={idx} />
                ))}
            </div>
        </>
    );
};

export default CourseList;
