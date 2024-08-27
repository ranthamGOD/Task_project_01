import React from 'react';

const CategoryCard = ({ title, description, image, price, category, rating }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto transition-transform transform hover:scale-102 duration-300 ease-in-out">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          onError={(e) => e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available'}
        />
      </div>
      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-darkBlack mb-2">{title}</h2>
        <p className="text-base text-lightBlack mb-4">{description}</p>
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

// RatingComponent to display stars
const RatingComponent = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.293 3.293a1 1 0 011.414 0l2 2a1 1 0 01.293.707v3.586a1 1 0 01-.293.707l-2 2a1 1 0 01-1.414-1.414L11.586 10H8.414l-1.293 1.293a1 1 0 01-1.414-1.414L9.293 6V3.293z" />
        </svg>
      ))}
      {hasHalfStar && (
        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.293 3.293a1 1 0 011.414 0l2 2a1 1 0 01.293.707v3.586a1 1 0 01-.293.707l-2 2a1 1 0 01-1.414-1.414L11.586 10H8.414l-1.293 1.293a1 1 0 01-1.414-1.414L9.293 6V3.293z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.293 3.293a1 1 0 011.414 0l2 2a1 1 0 01.293.707v3.586a1 1 0 01-.293.707l-2 2a1 1 0 01-1.414-1.414L11.586 10H8.414l-1.293 1.293a1 1 0 01-1.414-1.414L9.293 6V3.293z" />
        </svg>
      ))}
    </div>
  );
};

export default CategoryCard;
