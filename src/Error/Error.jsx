import { Link } from "react-router-dom";
import errorPage from "../../public/3047124.jpg"

const Error = () => {
    return (
        <div>
            <img className="md:h-[90vh] w-full object-cover" src={errorPage} alt="" />
            <Link className="flex justify-center items-center" to={'/'}>
                <button className="btn  btn-warning w-full">Home</button>
            </Link>
        </div>
    );
};

export default Error;