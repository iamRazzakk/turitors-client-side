import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;