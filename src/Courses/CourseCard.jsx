import React from 'react';

const CourseCard = ({ courses }) => {
    console.log(courses); // Log the entire course object
    const { title, img, rating, price, admissions } = courses;
    console.log(title);
    return (
        <div className="py-5 px-5">

            <div className="card text-black bg-[#87ceeb] shadow-xl h-96  transform transition-transform hover:scale-105">
                <figure><img className='h-56 w-full object-cover' src={img} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <div className="mt-4 card-actions justify-end">
                        <p>Price: ${price}</p>
                        <div className="badge badge-outline">Rating: {rating}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;