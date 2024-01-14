import img from '../../public/hello1.jpg'
import img1 from '../../public/hello2.jpg'
import img2 from '../../public/hello3.jpg'

const Features = () => {
    return (
        <div className='md:h[500px] md:mb-32'>
            <h3 className='text-center font-bold text-xl'>#Features</h3>
            <h1 className='text-center font-bold text-3xl'>Why Study with Turitor?</h1>
            <div className='md:flex p-6'>
                <div className='flex p-8'>
                    <div>
                        <img className='md:w-24' src={img} alt="" />
                    </div>
                    <div className='pl-6'>
                        <h1 className='text-xl font-bold'>Learn anything</h1>
                        <p>Whether you want to develop as a professional or discover a new hobby, there's an online course.</p>
                    </div>
                </div>
                <div className='flex p-8'>
                    <div>
                        <img className='md:w-24' src={img1} alt="" />
                    </div>
                    <div className='pl-6'>
                        <h1 className='text-xl font-bold'>Flexible learning</h1>
                        <p>Get a custom learning plan tailor to fit your busy life. Learn at your own pace and reach your goal.</p>
                    </div>
                </div>
                <div className='flex p-8'>
                    <div>
                        <img className='md:w-24' src={img2} alt="" />
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