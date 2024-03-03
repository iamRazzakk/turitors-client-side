import { useState } from 'react';
import icon from '../../public/icon.png'
import icon2 from '../../public/icon2.png'
import icon3 from '../../public/icon3.png'
import AOS from 'aos';
const Community = () => {
    AOS.init({
        offset: 120,
        duration: 1200,
        easing: 'ease',
        delay: 50,
    });
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);;
    return (
        <div className='text-slate-900 px-4'>
            <div className="md:flex gap-4 md:mb-32 md:h-[250px]">
                <div data-aos="zoom-in-left" className="flex-1 md:pl-6">
                    <h1 className="text-3xl text-slate-900 md:text-5xl font-bold">We are Turitor.
                        An online learning community</h1>
                    <p className='border-l-2 border-[#3630c9] ml-9 p-6 md:mt-4'>
                        At Turitor, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts.
                    </p>
                </div>
                <div data-aos="zoom-in-right" className="flex-1">
                    <div className="md:flex gap-4 w-full mx-auto">
                        <div className={`bg-[#f0fdfa] p-8 w-full relative overflow-hidden transform transition-transform duration-300 ${isHovered1 ? 'scale-110' : ''}`} onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
                            <img className='mx-auto' src={icon} alt="" />
                            <h1 className='text-center text-3xl text-[#3630c9] font-bold'>5016+</h1>
                            <h1 className='text-center'>Courses</h1>
                        </div>
                        <div className={`bg-[#f0fdfa] p-8 w-full relative overflow-hidden transform transition-transform duration-300 ${isHovered2 ? 'scale-110' : ''}`} onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
                            <img className='mx-auto' src={icon2} alt="" />
                            <h1 className='text-center text-3xl text-[#3630c9] font-bold'>Award</h1>
                            <h1 className='text-center'>Winner</h1>
                        </div>
                        <div className={`bg-[#f0fdfa] p-8 w-full relative overflow-hidden transform transition-transform duration-300 ${isHovered3 ? 'scale-110' : ''}`} onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
                            <img className='mx-auto' src={icon3} alt="" />
                            <h1 className='text-center text-3xl text-[#3630c9] font-bold'>15600+</h1>
                            <h1 className='text-center'>Students</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;