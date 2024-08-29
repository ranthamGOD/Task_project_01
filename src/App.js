import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import { FaShopify, FaChartLine, FaMoneyCheckAlt } from 'react-icons/fa';


// Loader Component
// const Loader = () => (
//   <div className="flex justify-center items-center min-h-screen">
//     <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-half animate-spin"></div>
//   </div>
// );

const collections = [
  {
    title: 'Works with Shopify POS',
    description: 'The Works with Shopify POS feature enables you to streamline your workflow.',
    appsCount: 104,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-green-400 to-blue-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-purple-400 to-pink-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-yellow-400 to-red-500' },
    ],
  },
  {
    title: 'Useful apps for India',
    description: 'The Useful apps for India feature enables you to streamline your workflow.',
    appsCount: 18,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-blue-400 to-indigo-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-pink-400 to-orange-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-green-400 to-teal-500' },
    ],
  },
  {
    title: 'made-by-shopify',
    description: 'The made-by-shopify feature enables you to streamline your workflow.',
    appsCount: 17,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-red-400 to-purple-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-teal-400 to-green-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-orange-400 to-yellow-500' },
    ],
  },
  {
    title: 'Works with Shopify Marketing',
    description: 'The Works with Shopify Marketing feature enables you to promote and streamline your products.',
    appsCount: 7,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-indigo-400 to-blue-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-pink-400 to-red-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-purple-400 to-indigo-500' },
    ],
  },
  {
    title: 'Best POS Integrations',
    description: 'Discover the best POS integrations to enhance your store operations.',
    appsCount: 56,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-yellow-400 to-orange-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-blue-400 to-green-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-red-400 to-pink-500' },
    ],
  },
  {
    title: 'Shopify SEO Tools',
    description: 'Improve your store’s visibility with these powerful SEO tools.',
    appsCount: 34,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-teal-400 to-blue-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-purple-400 to-yellow-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-orange-400 to-red-500' },
    ],
  },
  {
    title: 'Customer Retention',
    description: 'Boost customer loyalty with these effective retention strategies.',
    appsCount: 12,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-green-400 to-purple-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-blue-400 to-pink-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-yellow-400 to-indigo-500' },
    ],
  },
  {
    title: 'Shopify Analytics',
    description: 'Get insights into your store’s performance with Shopify analytics tools.',
    appsCount: 22,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-indigo-400 to-green-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-red-400 to-blue-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-yellow-400 to-purple-500' },
    ],
  },
  {
    title: 'Abandoned Cart Recovery',
    description: 'Recover lost sales with abandoned cart recovery apps.',
    appsCount: 9,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-teal-400 to-indigo-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-orange-400 to-pink-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-green-400 to-red-500' },
    ],
  },
  {
    title: 'Shopify Email Marketing',
    description: 'Enhance your marketing strategy with Shopify email marketing apps.',
    appsCount: 45,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-purple-400 to-blue-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-yellow-400 to-pink-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-teal-400 to-indigo-500' },
    ],
  },
  {
    title: 'Payment Gateways',
    description: 'Explore various payment gateway options for your Shopify store.',
    appsCount: 67,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-red-400 to-orange-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-green-400 to-blue-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-purple-400 to-pink-500' },
    ],
  },
  {
    title: 'Social Media Integrations',
    description: 'Integrate social media platforms to boost your store’s engagement.',
    appsCount: 33,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-blue-400 to-green-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-pink-400 to-yellow-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-indigo-400 to-red-500' },
    ],
  },
  {
    title: 'Shopify Plus Features',
    description: 'Unlock advanced features with Shopify Plus.',
    appsCount: 29,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-orange-400 to-blue-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-green-400 to-red-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-purple-400 to-yellow-500' },
    ],
  },
  {
    title: 'Store Design Apps',
    description: 'Create a stunning storefront with these store design apps.',
    appsCount: 21,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-teal-400 to-green-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-orange-400 to-purple-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-yellow-400 to-blue-500' },
    ],
  },
  {
    title: 'Shopify Multichannel',
    description: 'Sell on multiple channels with Shopify multichannel integrations.',
    appsCount: 14,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-red-400 to-blue-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-purple-400 to-green-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-indigo-400 to-orange-500' },
    ],
  },
  {
    title: 'Dropshipping Apps',
    description: 'Start your dropshipping business with these essential apps.',
    appsCount: 78,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-blue-400 to-yellow-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-green-400 to-red-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-orange-400 to-purple-500' },
    ],
  },
  {
    title: 'Shopify Loyalty Programs',
    description: 'Increase customer loyalty with Shopify loyalty program apps.',
    appsCount: 8,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-pink-400 to-blue-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-yellow-400 to-green-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-purple-400 to-red-500' },
    ],
  },
  {
    title: 'Inventory Management',
    description: 'Manage your inventory effectively with these Shopify apps.',
    appsCount: 19,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-green-400 to-orange-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-blue-400 to-purple-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-yellow-400 to-pink-500' },
    ],
  },
  {
    title: 'Shipping Solutions',
    description: 'Optimize your shipping process with Shopify shipping solutions.',
    appsCount: 25,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-red-400 to-indigo-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-teal-400 to-orange-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r fromblue-400 to-yellow-500' },
    ],
  },
  {
    title: 'Shopify Conversion Tools',
    description: 'Boost your sales with conversion rate optimization tools.',
    appsCount: 37,
    icons: [
      { icon: <FaShopify />, bgColor: 'bg-gradient-to-r from-purple-400 to-teal-500' },
      { icon: <FaChartLine />, bgColor: 'bg-gradient-to-r from-yellow-400 to-green-500' },
      { icon: <FaMoneyCheckAlt />, bgColor: 'bg-gradient-to-r from-red-400 to-blue-500' },
    ],
  },
];

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const totalItems = filteredProducts.length;


  useEffect(() => {
    setFilteredProducts(collections)
  }, [])

  // Filter products based on search query
  const handleSearch = (query) => {
    setCurrentPage(1); // Reset to first page on search

    if (query) {
      const lowercasedQuery = query?.toLowerCase();
      const filtered = collections?.filter(product =>
        product?.title?.toLowerCase()?.includes(lowercasedQuery) ||
        product?.description?.toLowerCase()?.includes(lowercasedQuery)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(collections); // Reset to original products if query is empty
    }
  };

  // Calculate total pages
  const totalPages = Math.ceil(collections.length / itemsPerPage);

  // Calculate data to display on the current page
  const currentData = collections.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  // console.log("currentPage Data: ", currentData)

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div className="bg-gray-100 min-h-screen p-5 bg_color">
      <Header />
      {/* {loading && <Loader />} */}
      <div className="max-w-7xl mx-auto pt-16 px-4">
        <SearchBar onSearch={handleSearch} />
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-darkBlack">Top shopify collections</h2>
        </div>
        <div className='mb-6 flex items-center justify-between'>
          <small className='text-sm text-lightBlack'>
            We use an agile approach to test assumptions and connect with the needs of your audience early and often.
          </small>
          <a href='https://www.shopdigest.com/' className='text-blue-500 hover:underline  hidden md:inline'>See all</a>
        </div>
        {
          filteredProducts.length === 0 ? (
            <div className="flex justify-center items-center h-48">
              <p className="text-lg text-gray-600">No results found</p> {/* No results message */}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer">
                {currentData.map((collection, index) => (
                  <CategoryCard key={index} collection={collection} />
                ))}
              </div>
              {/* Pagination Component */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
              />
            </>
          )
        }
      </div>
    </div>
  );
};

export default App;
