import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';


// Loader Component
const Loader = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-half animate-spin"></div>
  </div>
);


const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true);
  const [itemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  // Api handling
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch(`https://fakestoreapi.com/products?limit=${itemsPerPage}&page=${currentPage}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data)
        setFilteredProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchItems();
  }, [currentPage]);


  // Filter products based on search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on search

    if (query) {
      const lowercasedQuery = query.toLowerCase();
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(lowercasedQuery) ||
        product.description.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Reset to original products if query is empty
    }
  };

  // console.log("filteredProducts", filteredProducts)
  // console.log("products", products)

  const indexOfLastProduct = currentPage * productsPerPage;
  // console.log("indexOfLastProduct", indexOfLastProduct)
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // console.log("indexOfFirstProduct", indexOfFirstProduct)
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  // console.log("currentProducts", currentProducts)

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <Header />
      {loading && <Loader />} {/* Show loader while loading */}
      {error && <div className="text-red-500">Error: {error}</div>} {/* Display error message */}
      {!loading && !error && (
        <div className="max-w-7xl mx-auto pt-16 px-4">
          <SearchBar onSearch={handleSearch} /> {/* Pass setSearchQuery directly */}
          <h2 className="text-2xl font-bold mb-6 text-darkBlack">Our Products</h2> {/* Product heading */}
          {filteredProducts.length === 0 ? (
            <div className="flex justify-center items-center h-48">
              <p className="text-lg text-gray-600">No results found</p> {/* No results message */}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentProducts.map((product) => (
                  <CategoryCard
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    rating={product.rating}
                    price={product.price}
                  />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
