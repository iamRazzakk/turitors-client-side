import icon from '../../public/icon.png'
import icon2 from '../../public/icon2.png'
import icon3 from '../../public/icon3.png'
const Community = () => {
    return (
        <div>
            <div className="md:flex gap-4">
                <div className="flex-1">
                    <h1 className="text-5xl font-bold">We are Turitor.
                        An online learning community</h1>
                    <p className='border-l-2 border-[#3630c9] ml-9 p-6 md:mt-4'>
                        At Turitor, we believe everyone should have the opportunity to create progress through technology and develop the skills of tomorrow. With assessments, learning paths and courses authored by industry experts.
                    </p>
                </div>
                <div className="flex-1">
                    <div className="md:flex gap-4 w-full mx-auto">
                        <div className='bg-[#f0fdfa] p-8 w-full'>
                            <img className='mx-auto' src={icon} alt="" />
                            <h1 className='text-center text-3xl text-[#3630c9] font-bold'>5016+</h1>
                            <h1 className='text-center'>Courses</h1>
                        </div>
                        <div className='bg-[#f0fdfa] p-8 w-full'>
                            <img className='mx-auto' src={icon2} alt="" />
                            <h1 className='text-center text-3xl text-[#3630c9] font-bold'>Award</h1>
                            <h1 className='text-center'>Winner</h1>
                        </div>
                        <div className='bg-[#f0fdfa] p-8 w-full'>
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