import { useEffect, useState } from "react";
import AssinmentCard from "./AssinmentCard";
import axios from "axios";

const CourseList = () => {
    const [courseData, setCourseData] = useState([]);

    useEffect(() => {

        axios.get('/Assinment.json')
            .then(res => {
                setCourseData(res.data);
            })
            .catch(error => {
                console.error(error);
            });
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
