/**
 * HOME PAGE
 * Landing page with hero section and featured products
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Toast from '../components/Toast';

function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const { addToCart } = useCart();

  // Fetch featured products when page loads
  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  /**
   * FETCH FEATURED PRODUCTS FROM PHP API
   * Gets first 6 products to display on home page
   */
  const fetchFeaturedProducts = async () => {
    try {
      const response = await fetch('http://localhost/Badr%20Hassan%20Onsite%205%203D/backend/get_products.php');
      const data = await response.json();
      
      if (data.success) {
        // Get only first 6 products for featured section
        setFeaturedProducts(data.data.slice(0, 6));
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * HANDLE ADD TO CART
   * Adds product to cart and shows success notification
   */
  const handleAddToCart = (product) => {
    addToCart(product);
    setToastMessage(`${product.name} added to cart!`);
    setShowToast(true);
  };

  return (
    <div>
      {/* Toast notification */}
      <Toast
        show={showToast}
        message={toastMessage}
        onClose={() => setShowToast(false)}
      />

      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container">
          <h1 className="display-3 fw-bold mb-4">Welcome to ShopEasy</h1>
          <p className="lead mb-4">
            Discover amazing products at unbeatable prices
          </p>
          <Link to="/products" className="btn btn-light btn-lg px-5">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Featured Products</h2>

          {loading ? (
            // Loading spinner
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            // Product grid
            <div className="row g-4">
              {featuredProducts.map((product) => (
                <div key={product.id} className="col-md-4">
                  <div className="card product-card h-100">
                    {/* Product image */}
                    <img
                      src={product.image_url}
                      className="card-img-top product-img"
                      alt={product.name}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text text-muted small">
                        {product.description.substring(0, 80)}...
                      </p>
                      <div className="mt-auto">
                        <p className="h4 text-primary mb-3">${product.price}</p>
                        <div className="d-flex gap-2">
                          <Link
                            to={`/product/${product.id}`}
                            className="btn btn-outline-primary flex-grow-1"
                          >
                            View Details
                          </Link>
                          <button
                            className="btn btn-primary"
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

          {/* View all products button */}
          <div className="text-center mt-5">
            <Link to="/products" className="btn btn-primary btn-lg">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
