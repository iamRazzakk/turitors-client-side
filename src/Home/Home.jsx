import { Helmet } from "react-helmet-async";
import Feedback from "../Feedback/Feedback";
import Header from "../Header/Header";
import Community from "./Community";
import Features from "./Features";
import Instructors from "./Instructors";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Turitors || Home</title>
            </Helmet>
            <Header></Header>
            <Features></Features>
            <Community></Community>
            <Feedback></Feedback>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;