
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img from '../../public/ins1.jpeg'
import img2 from '../../public/ins2.jpeg'
import img3 from '../../public/ins3.jpeg'
const Instructors = () => {
    return (
        <div className='md:mb-32'>
            <h3 className='text-center font-bold text-xl'>#Instructors</h3>
            <h1 className='text-center font-bold text-3xl'>Featured Instructors</h1>
            <div className='lg:h-[250px] md:mt-14'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='object-cover md:w-40 md:h-40 rounded-full mx-auto' src={img} alt="" />
                        <h1 className=' text-xl font-bold text-center'>Martin</h1>
                        <h3 className='text-center'>Instructor</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='object-cover md:w-40 md:h-40 rounded-full mx-auto' src={img2} alt="" />
                        <h1 className=' text-xl font-bold text-center'>Abidal</h1>
                        <h3 className='text-center'>Instructor</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='object-cover md:w-40 md:h-40 rounded-full mx-auto' src={img3} alt="" />
                        <h1 className=' text-xl font-bold text-center'>Yolanda</h1>
                        <h3 className='text-center'>Instructor</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='object-cover md:w-40 md:h-40 rounded-full mx-auto' src={img} alt="" />
                        <h1 className=' text-xl font-bold text-center'>Martin</h1>
                        <h3 className='text-center'>Instructor</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='object-cover md:w-40 md:h-40 rounded-full mx-auto' src={img2} alt="" />
                        <h1 className=' text-xl font-bold text-center'>Abidal</h1>
                        <h3 className='text-center'>Instructor</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='object-cover md:w-40 md:h-40 rounded-full mx-auto' src={img3} alt="" />
                        <h1 className=' text-xl font-bold text-center'>Yolanda</h1>
                        <h3 className=''>Instructor</h3>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Instructors;