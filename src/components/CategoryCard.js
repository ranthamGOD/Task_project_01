import React, { useState } from 'react';
import RatingComponent from './Rating';

const CategoryCard = ({ title, description, image, price, category, rating }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 100;

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto transition-transform transform hover:scale-102 duration-300 ease-in-out">
      {/* image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-contain p-2"
          onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available'}
        />
      </div>
      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-darkBlack mb-2">{title}</h2>

        {/* Description with "See More" */}
        <p className="text-base text-lightBlack mb-4">
          {isExpanded ? description : `${description.substring(0, characterLimit)}...`}
          {description.length > characterLimit && (
            <span
              onClick={toggleDescription}
              className="text-blue-500 cursor-pointer hover:underline ml-1"
            >
              {isExpanded ? 'See Less' : 'See More'}
            </span>
          )}
        </p>

        <div className="flex items-center mb-4">
          <span className="text-xl font-bold text-darkBlack">${price}</span>
          <span className="text-sm ml-2 text-gray-500">/{category}</span>
        </div>
        <div className="flex items-center mb-4">
          <RatingComponent rating={rating.rate} />
          <span className="text-sm text-gray-500 ml-2">({rating.count} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
