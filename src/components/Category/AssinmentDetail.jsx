import { data } from 'autoprefixer';
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AssinmentDetail = () => {
    const { id } = useParams();
    const [cate, setCate] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/createAssainment/${id}`)
            .then((response) => response.json())
            .then((data) => setCate(data))
            .catch((error) => console.error('Error fetching assignment data:', error));
    }, [id]);
    console.log(cate);

    if (!cate) {
        return <div className='flex justify-center items-center font-bold text-3xl'>No data Found</div>;
    }
    console.log(data);

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg w-full h-44 object-cover" src={cate.url} alt={cate.title} />
            <div className="p-5">
                <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cate.title}</h5>
                </a>
                <p>{cate.marks}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{cate.description}</p>
            </div>
        </div>
    );
};

export default AssinmentDetail;