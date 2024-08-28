import React from "react";

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

export default RatingComponent;