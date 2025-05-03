
import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    console.log(news);
    const {
        title,
        details,
        image_url,
        category_id,
    } = news;
    return (
        <div className=" bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            {/* News Image */}
            <img
                src={image_url}
                alt="news"
                className="w-full h-64 object-cover"
            />

            {/* Content */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

                {/* Author & Date */}
                

                {/* Tags */}
                

                {/* News Details */}
                <p className="text-gray-700 leading-relaxed">{details}</p>

                {/* Back to category link */}
                <div className="mt-6">
                    <Link
                        to={`/category/${category_id}`}
                        className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                    >
                        ← All news in this category
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;