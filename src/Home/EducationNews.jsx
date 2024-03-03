import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Header/bg.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const EducationNews = () => {
    const [studentFeedBack, setStudentFeedBack] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setStudentFeedBack(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
        <h1 className="text-center font-bold text-3xl text-black md:mb-12">Find out the latest education news</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    studentFeedBack?.map(feedback => (
                        <SwiperSlide key={feedback.id}>
                            <div className="card cards card-side md:mb-32 mb-10 bg-[#447ab5] text-white shadow-xl">
                                <figure><img className="md:h-[280px] object-cover" src={feedback?.image} alt={feedback?.title} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{feedback?.title}</h2>
                                    <p>{feedback?.description}</p>
                                    <div className="card-actions justify-end">
                                        <p className=""> {feedback?.owner}</p>
                                        <p>Rating: {feedback?.rating}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </ >
    );
};

export default EducationNews;
