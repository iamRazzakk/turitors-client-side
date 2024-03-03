import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const StudentFeedBack = () => {
    const [studentFeedBack, setStudentFeedBack] = useState([]);

    useEffect(() => {
        fetch("feedback.json")
            .then(res => res.json())
            .then(data => setStudentFeedBack(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);
    AOS.init({
        offset: 120,
        duration: 1200,
        easing: 'ease',
        delay: 50,
    });

    return (
        <div className="px-10 md:mb-32">
            <h1 className="text-center text-3xl font-bold text-black md:mb-12">#Student Feedback</h1>
            <Swiper data-aos="fade-down-right" className="mySwiper md:h-[350px]">
                {studentFeedBack.map((feedback, index) => (
                    <SwiperSlide key={index} className="bg-[#e1e9fd] rounded-lg">
                        <div className="md:flex justify-evenly items-center md:p-10">
                            <div className="w-2/3 mx-auto md:px-8  text-black">
                                <h1 className="md:text-6xl">
                                    <FaQuoteLeft></FaQuoteLeft>
                                </h1>
                                <h2 className="font-bold text-2xl ">{feedback.student_name}</h2>
                                <p className="md:mt-2 text-xl">{feedback.feedback}</p>
                            </div>
                            <div className="w-1/3 mx-auto">
                                <img className="w-24 object-cover h-24 rounded-full md:w-48 md:h-48" src={feedback.image_url} alt={feedback.student_name} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default StudentFeedBack;
