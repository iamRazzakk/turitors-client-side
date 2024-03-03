import { Helmet } from "react-helmet-async";
import Header from "../Header/Header";
import Community from "./Community";
import Features from "./Features";
import Instructors from "./Instructors";
import StudentFeedBack from "./StudentFeedBack";
import EducationNews from "./EducationNews";


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
            <EducationNews></EducationNews>
        </div>
    );
};

export default Home;