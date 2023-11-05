import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div className="bg-gradient-to-r from-[#f1e7e7] text-black to-[#87ceeb]">
            <h3 className="text-center mt-10 text-xl font-bold">#Courses</h3>
            <h1 className="text-center text-3xl mt-5 font-bold">Featured Courses</h1>
            <div className="grid md:grid-cols-3 mt-10 p-10">
                {courses.map(course => <CourseCard key={course.id} courses={course} />)}
            </div>
        </div>
    );
};
export default Courses;