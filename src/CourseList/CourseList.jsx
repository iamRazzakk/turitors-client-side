import { useEffect, useState } from "react";
import AssinmentCard from "./AssinmentCard";

const CourseList = () => {
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {

        fetch('/Assinment.json')
            .then(res => res.json())
            .then(data => setCourseData(data))
    }, []);

    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-black mb-10'>Assinmet List</h1>
            <div className="grid md:grid-cols lg:grid-cols-4 gap-5 mx-auto">

                {courseData?.map((course, idx) => (
                    <AssinmentCard course={course} key={idx} />
                ))}
            </div>
        </div>
    );
};

export default CourseList;
