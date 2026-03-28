/**
 * PRODUCTS PAGE
 * Displays all products with search/filter functionality
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Toast from '../components/Toast';
import { API_ENDPOINTS } from '../config';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const { addToCart } = useCart();

  // Set page title
  useEffect(() => {
    document.title = 'ShopEasy - Products';
  }, []);

  // Fetch all products when page loads
  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter products when search term or category changes
  useEffect(() => {
    filterProducts();
  }, [searchTerm, selectedCategory, products]);

  /**
   * FETCH ALL PRODUCTS FROM PHP API
   */
  const fetchProducts = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.GET_PRODUCTS);
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.data);
        setFilteredProducts(data.data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * FILTER PRODUCTS BASED ON SEARCH AND CATEGORY
   */
  const filterProducts = () => {
    let filtered = products;

    // Filter by search term (searches in name and description)
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    setFilteredProducts(filtered);
  };

  /**
   * GET UNIQUE CATEGORIES FROM PRODUCTS
   */
  const getCategories = () => {
    const categories = ['All', ...new Set(products.map(p => p.category))];
    return categories;
  };

  /**
   * HANDLE ADD TO CART
   */
  const handleAddToCart = (product) => {
    addToCart(product);
    setToastMessage(`${product.name} added to cart!`);
    setShowToast(true);
  };

  return (
    <div className="container py-5">
      {/* Toast notification */}
      <Toast
        show={showToast}
        message={toastMessage}
        onClose={() => setShowToast(false)}
      />

      <h1 className="text-center mb-4">Our Products</h1>

      {/* Search and Filter Section */}
      <div className="row mb-4">
        {/* Search bar */}
        <div className="col-md-8 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="🔍 Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category filter */}
        <div className="col-md-4 mb-3">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {getCategories().map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-muted mb-4">
        Showing {filteredProducts.length} product(s)
      </p>

      {loading ? (
        // Loading spinner
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : filteredProducts.length === 0 ? (
        // No products found message
        <div className="text-center py-5">
          <h3>No products found</h3>
          <p className="text-muted">Try adjusting your search or filter</p>
        </div>
      ) : (
        // Products grid
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 col-lg-3">
              <div className="card product-card h-100">
                <img
                  src={product.image_url}
                  className="card-img-top product-img"
                  alt={product.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted small">
                    {product.description.substring(0, 60)}...
                  </p>
                  <div className="mt-auto">
                    <p className="h5 text-primary mb-3">${product.price}</p>
                    <div className="d-grid gap-2">
                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-outline-primary btn-sm"
                      >
                        View Details
                      </Link>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
