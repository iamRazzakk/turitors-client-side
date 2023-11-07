import { Link } from 'react-router-dom';

const AssinmentCard = ({ course }) => {

    const { title, url } = course;

    return (

        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a >
                <img className="w-full rounded-t-lg h-44 object-cover" src={url} alt="" />
            </a>
            <div className="p-5">
                <a >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <Link to={`/seeAssinment/${title}`}><button className='btn bg-blue-200 hover:bg-blue-300 text-white font-semibold py-2 px-4 rounded transition duration-300'>See All Assignment</button></Link>
            </div>
        </div>

    );
};

export default AssinmentCard;