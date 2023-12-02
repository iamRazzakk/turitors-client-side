import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from './../../Provider/AuthProvider';

const MyAssignment = () => {
    const [markFeedbacks, setMarkFeedbacks] = useState();
    const {user}=useContext(AuthContext)

    useEffect(() => {
        fetch('http://localhost:5000/markFeedback')
            .then(res => res.json())
            .then(data => setMarkFeedbacks(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    console.log(markFeedbacks);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Mark</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {markFeedbacks && markFeedbacks.map((markFeedback, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.displayName}</td>
                                <td>{markFeedback.mark}</td>
                                <td>{markFeedback.feedback}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAssignment;
