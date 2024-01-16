import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from './../../Provider/AuthProvider';

const MyAssignment = () => {
    const [markFeedbacks, setMarkFeedbacks] = useState();
    const {user}=useContext(AuthContext)

    useEffect(() => {
        fetch('https://turitors-server-side.vercel.app/markFeedback')
            .then(res => res.json())
            .then(data => setMarkFeedbacks(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    console.log(markFeedbacks);

    return (
        <div>
            <div className=" md:px-14">
                <table className="table">
                    <thead className="bg-[#3d90e9] text-white">
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Mark</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody className="border border-[#3d90e9]">
                        {markFeedbacks && markFeedbacks.map((markFeedback, index) => (
                            <tr className="border border-[#3d90e9]" key={index}>
                                <th>{index + 1}</th>
                                <td>{user?.displayName}</td>
                                <td>{markFeedback?.mark}</td>
                                <td>{markFeedback?.feedback}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAssignment;
