import { Link } from "react-router-dom";
import errorPage from "../../public/3047124.jpg"

const Error = () => {
    return (
        <div>
            <img className="md:h-[85vh] w-full object-cover" src={errorPage} alt="" />
            <Link className="flex justify-center items-center" to={'/'}>
                <button className="py-3 px-10 rounded-full bg-[#3d90e9] text-white w-full">Home</button>
            </Link>
        </div>
    );
};

export default Error;