import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
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
            <h1 className="text-center font-bold text-3xl text-black mb-6 mt-6 md:mb-12">Find out the latest education news</h1>
            <Swiper
                slidesPerView={1} 
                spaceBetween={30} 
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {studentFeedBack?.map(feedback => (
                    <SwiperSlide key={feedback.id}>
                        <div className="  cards md:flex gap-6 md:mb-32 mb-10 bg-[#447ab5] text-white shadow-xl">
                            <figure><img className="flex-1 md:h-[280px] object-cover" src={feedback?.image} alt={feedback?.title} /></figure>
                            <div className="flex-1 p-10 ">
                                <h2 className="card-title">{feedback?.title}</h2>
                                <p className="md:mt-4">{feedback?.description}</p>
                                <div className="card-actions md:mt-6 justify-end">
                                    <p className="justify-start"> {feedback?.owner}</p>
                                    <p>Rating: {feedback?.rating}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default EducationNews;
