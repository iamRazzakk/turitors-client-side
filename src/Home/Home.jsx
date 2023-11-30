import { Helmet } from "react-helmet-async";
import CourseList from "../CourseList/CourseList";
import Courses from "../Courses/Courses";
import Feedback from "../Feedback/Feedback";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Helmet>
                    <title>Turitors || Home</title>
            </Helmet>
            <Header></Header>
            <CourseList></CourseList>
            <Courses></Courses>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;