import { Helmet } from "react-helmet-async";
import Header from "../Header/Header";
import Community from "./Community";
import Features from "./Features";
import Instructors from "./Instructors";
import StudentFeedBack from "./StudentFeedBack";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Turitors || Home</title>
            </Helmet>
            <Header></Header>
            <Features></Features>
            <Community></Community>
            <StudentFeedBack></StudentFeedBack>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;