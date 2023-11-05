import Courses from "../Courses/Courses";
import Feedback from "../Feedback/Feedback";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Courses></Courses>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;