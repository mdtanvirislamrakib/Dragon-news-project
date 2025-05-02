import React from 'react';
import { FaEye, FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ news }) => {
    const {
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
    } = news;
    return (
        <div className="card shadow-xl ">
            <div className="bg-base-200 flex items-center justify-between gap-4 p-4 border-b">
                <div className='flex items-center gap-4'>
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h2 className="text-sm font-semibold">{author?.name}</h2>
                        <p className="text-xs text-gray-500">
                            {format(new Date(author?.published_date), "yyyy-MM-dd")}
                        </p>
                    </div>
                </div>

                <div className='flex items-center gap-3'>
                    <CiBookmark size={25} />
                    <IoShareSocialOutline size={25} />
                </div>
            </div>

            <div className="p-4">
                <h2 className="card-title text-lg mb-2">{title}</h2>
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="w-full h-48 object-cover rounded"
                />
                <p className="text-sm text-gray-600 mt-3">
                    {details.length > 150 ? `${details.slice(0, 150)}...` : details}
                </p>
                <button className="text-primary mt-2">Read More</button>
            </div>

            <div className="flex items-center justify-between p-4 border-t text-sm text-gray-500">
                <div className="flex items-center gap-2 text-orange-500">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={i < rating.number ? "text-orange-500" : "text-gray-300"}
                        />
                    ))}
                    <span className="ml-1">{rating.number}</span>
                </div>

                <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;