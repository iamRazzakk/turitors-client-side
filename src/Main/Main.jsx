import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Header/Navbar";
import { useEffect, useState } from "react";
import CustomLoading from "../components/CustomLoading/CustomLoading";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, [])
    return (
        <div>
            {
                isLoading ? <>
                    <CustomLoading></CustomLoading>
                </> : <>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </>
            }
        </div>
    );
};

export default Main;