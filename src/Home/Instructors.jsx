
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img from '../../public/ins1.jpeg'
import img2 from '../../public/ins2.jpeg'
import img3 from '../../public/ins3.jpeg'
import AOS from 'aos';
const Instructors = () => {
    AOS.init({
        offset: 120,
        duration: 1200,
        easing: 'ease',
        delay: 50,
    });
    return (
        <div className='md:mb-32 text-slate-900'>
            <h3 className='text-center font-bold text-xl'>#Instructors</h3>
            <h1 className='text-center font-bold text-3xl'>Featured Instructors</h1>
            <div className='lg:h-[250px] md:mt-14'>
                <Swiper data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
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