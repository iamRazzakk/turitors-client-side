import Navbar from "./Navbar";
import headerImg from '../../public/stressed-person-using-computer-at-desk.png'
import './bg.css'

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex p-10 header-bg">
                <div className="flex-1">
                    <h3 className="text-xl mb-4 mt-10">#Improving lives through learning</h3>
                    <h1 className="text-5xl font-bold">Learn Anytime, Anywhere. Accelerate Your Future.
                    </h1>
                    <p className="text-xl mt-10">We believe everyone has the capacity to be creative. Eduzion is a place where people develop their own potential. </p>
                    <div className="flex gap-4 mt-10">
                        <button className="btn btn-outline btn-warning">View Courses</button>
                        <button className="btn btn-outline btn-success">Start Trail</button>
                    </div>
                </div>
                <div className="flex-1">
                    <img className="rounded" src={headerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;