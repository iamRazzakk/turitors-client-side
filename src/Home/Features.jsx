import img from '../../public/hello1.jpg'
import img1 from '../../public/hello2.jpg'
import img2 from '../../public/hello3.jpg'
import './Features.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Features = () => {
    AOS.init({
        offset: 120,
        duration: 1200,
        easing: 'ease',
        delay: 50,
    });
    return (
        <div className='md:h[500px] md:mb-32 text-slate-900'>
            <h3 data-aos="fade-down" className='text-center font-bold text-xl'>Features</h3>
            <h1 data-aos="fade-up" className='text-center font-bold text-3xl'>Why Study with Turitor?</h1>
            <div  className='md:flex p-6 '>
                <div data-aos="zoom-in" className='flex p-8 bgHover'>
                    <div>
                        <img className='md:w-24 imgHover' src={img} alt="" />
                    </div>
                    <div className='pl-6'>
                        <h1 className='text-xl font-bold'>Learn anything</h1>
                        <p>Whether you want to develop as a professional or discover a new hobby, there's an online course.</p>
                    </div>
                </div>
                <div data-aos="zoom-in" className='flex p-8 bgHover'>
                    <div>
                        <img className='md:w-24 imgHover' src={img1} alt="" />
                    </div>
                    <div className='pl-6'>
                        <h1 className='text-xl font-bold'>Flexible learning</h1>
                        <p>Get a custom learning plan tailor to fit your busy life. Learn at your own pace and reach your goal.</p>
                    </div>
                </div>
                <div data-aos="zoom-out" className='flex p-8 bgHover'>
                    <div>
                        <img className='md:w-24 imgHover' src={img2} alt="" />
                    </div>
                    <div className='pl-6'>
                        <h1 className='text-xl font-bold'>Learn with experts</h1>
                        <p>Meet exparts from top university and cultural institutions, who'll share their experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;