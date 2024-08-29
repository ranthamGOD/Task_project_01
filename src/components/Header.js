import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Dropdown */}
        <div className="flex items-center cursor-pointer">
          <h1 className="text-2xl font-bold text-purple-600">ShopDigest</h1>
          <div className="h-6 border-l border-gray-300 mx-4"></div>
          <select className="text-sm font-bold text-gray-700 bg-transparent focus:outline-none">
            <option value="shopify">Shopify</option>
          </select>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-700 text-3xl px-3">
            ☰
          </button>
        </div>

        {/* Navigation and Buttons (Hidden on medium screens) */}
        <nav className="hidden lg:flex space-x-6 text-lightBlack">
          <ul className="flex space-x-6">
            <li><a href="https://www.shopdigest.com/" className="hover:text-purple-600">Features</a></li>
            <li><a href="https://www.shopdigest.com/" className="hover:text-purple-600">Marketplace</a></li>
            <li><a href="https://www.shopdigest.com/" className="hover:text-purple-600">Company</a></li>
            <li><a href="https://www.shopdigest.com/" className="hover:text-purple-600">Team</a></li>
            <li><a href="https://www.shopdigest.com/" className="hover:text-purple-600">Contact</a></li>
          </ul>
        </nav>
        {/* Navigation and Buttons (Hidden on medium screens) */}
        <div className="hidden lg:flex space-x-4">
          <button className="border border-purple-600 text-purple-600 hover:bg-purple-100 px-4 py-2 rounded-lg">
            Login
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">Add Post &nbsp; <FaArrowRightLong className='display: inline mb-1' /></button>
        </div>
      </div>

      {/* Sidebar for smaller screens (Visible from medium screens) */}
      <div className={`fixed top-0 right-0 h-full bg-white shadow-md z-20 transition-transform transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden w-2/4 md:w-1/4`}>
        <div className="flex flex-col items-start p-4 space-y-4">
          <button onClick={() => setSidebarOpen(false)} className="self-end text-gray-700 text-3xl px-3">✖</button>
          <ul className="space-y-4">
            <li><a href="https://www.shopdigest.com/" className="text-lightBlack hover:text-purple-600">Features</a></li>
            <li><a href="https://www.shopdigest.com/" className="text-lightBlack hover:text-purple-600">Marketplace</a></li>
            <li><a href="https://www.shopdigest.com/" className="text-lightBlack hover:text-purple-600">Company</a></li>
            <li><a href="https://www.shopdigest.com/" className="text-lightBlack hover:text-purple-600">Team</a></li>
            <li><a href="https://www.shopdigest.com/" className="text-lightBlack hover:text-purple-600">Contact</a></li>
          </ul>
          <button className="text-darkBlack hover:text-purple-600">Login</button>

          <button className="bg-purple-600 text-white px-4 py-2 rounded">Add Post &nbsp; <FaArrowRightLong className='display: inline mb-1' /></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
