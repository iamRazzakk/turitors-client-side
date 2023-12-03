import { Helmet } from "react-helmet-async";
import CourseList from "../CourseList/CourseList";
import Courses from "../Courses/Courses";
import Feedback from "../Feedback/Feedback";
import Header from "../Header/Header";
import Faq from "./FAQ";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Turitors || Home</title>
            </Helmet>
            <Header></Header>
            <Feedback></Feedback>
            <div className="p-20 ">
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;