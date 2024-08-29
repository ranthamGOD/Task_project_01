import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const CategoryCard = ({ collection }) => {
  const { title, description, appsCount, icons } = collection;
  // const [isExpanded, setIsExpanded] = useState(false);
  // const characterLimit = 40;

  // const toggleDescription = () => {
  //   setIsExpanded(!isExpanded);
  // };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto transition-transform transform hover:scale-102 duration-300 ease-in-out flex flex-col justify-between">
      {/* Content Section */}
      <div className="p-4 flex-grow">
        {/* Title */}
        <h2 className="text-xl font-semibold text-darkBlack mb-2">{title}</h2>

        {/* Description with "See More" */}
        <p className="text-base text-lightBlack mb-4 overflow-hidden">
          {/* {isExpanded ? description : `${description.substring(0, characterLimit)}...`}
          {description.length > characterLimit && (
            <span
              onClick={toggleDescription}
              className="text-blue-500 cursor-pointer hover:underline ml-1"
            >
              {isExpanded ? 'See Less' : 'See More'}
            </span>
          )} */}
          {description}
        </p>

      </div>
      {/* Icons Section */}
      <div className="flex space-x-3 p-3 pt-0">
        {icons.map((iconData, index) => (
          <div
            key={index}
            className={`p-2 rounded-md ${iconData.bgColor} flex items-center justify-center`}
          >
            <span className="text-white text-lg">
              {iconData.icon}
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-300 my-2"></div>

      {/* Apps Count and Button Section */}
      <div className="flex items-center justify-between p-4">
        <span className="text-lg font-bold text-lightGreen">{appsCount} Apps</span>
        <button className="flex items-center px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800">
          Explore More <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
