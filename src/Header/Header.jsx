
import { Link } from 'react-router-dom';
import headerImg from '../../public/stressed-person-using-computer-at-desk.png'
import './bg.css'

const Header = () => {
    return (
        <div>
            <div className=" lg:flex  p-10 header-bg w-[1280px] mx-auto">
                <div className="flex-1">
                    <h3 className="text-sm md:text-xl mb-4 mt-10">#Improving lives through learning</h3>
                    <h1 className="text-xl md:text-5xl font-bold">Learn Anytime, Anywhere. Accelerate Your Future.
                    </h1>
                    <p className="text-sm md:text-xl mt-10">We believe everyone has the capacity to be creative. Eduzion is a place where people develop their own potential. </p>
                    <div className="flex gap-4 mt-10">
                        <Link to='addCourse'>
                            <button className="btn btn-outline btn-warning">Assignment</button>
                        </Link>
                        <Link to='/createAssainment'>
                            <button className="btn btn-outline btn-success">Create</button>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block flex-1">
                    <img className="rounded " src={headerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;