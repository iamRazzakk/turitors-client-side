
import { Link } from 'react-router-dom';
// import headerImg from '../../public/stressed-person-using-computer-at-desk.png'
import './bg.css'
import Lottie from "lottie-react";
import headerImg from "../../public/lotti.json";

const Header = () => {
    return (
        <div>
            <div className=" lg:flex   p-10  mx-auto">
                <div className="flex-1">
                    <h3 className="text-sm md:text-xl mb-4 mt-10">#Improving lives through learning</h3>
                    <h1 className="text-xl md:text-5xl font-bold">Learn Anytime, Anywhere. Accelerate Your Future.
                    </h1>
                    <p className="text-sm md:text-xl mt-10">We believe everyone has the capacity to be creative. Eduzion is a place where people develop their own potential. </p>
                    <div className="flex gap-4 mt-10">
                        <Link to='addCourse'>
                            <button className="px-10 py-4 bg-[#3d90e9] text-white rounded-full button">Assignment</button>
                        </Link>
                        <Link to='/createAssainment'>
                            <button className="px-10 py-4 button2 btn-outline border text-[#3d90e9] rounded-full">Create</button>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block flex-1">
                    <Lottie className='h-[450px] ' animationData={headerImg} loop={true} />;
                </div>
            </div>
        </div>
    );
};

export default Header;