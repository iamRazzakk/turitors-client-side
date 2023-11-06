import CourseList from "../CourseList/CourseList";
import Courses from "../Courses/Courses";
import Feedback from "../Feedback/Feedback";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Courses></Courses>
            <Feedback></Feedback>
            <CourseList></CourseList>
        </div>
    );
};

export default Home;