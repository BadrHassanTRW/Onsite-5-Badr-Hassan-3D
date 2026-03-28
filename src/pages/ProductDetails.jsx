/**
 * PRODUCT DETAILS PAGE
 * Shows full information about a single product
 */

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Toast from '../components/Toast';
import { API_ENDPOINTS } from '../config';

function ProductDetails() {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const { addToCart } = useCart();

  // Set dynamic page title
  useEffect(() => {
    if (product) {
      document.title = `ShopEasy - ${product.name}`;
    }
  }, [product]);

  // Fetch product details when page loads
  useEffect(() => {
    fetchProduct();
  }, [id]);

  /**
   * FETCH SINGLE PRODUCT FROM PHP API
   */
  const fetchProduct = async () => {
    try {
      const response = await fetch(`${API_ENDPOINTS.GET_PRODUCT}?id=${id}`);
      const data = await response.json();
      
      if (data.success) {
        setProduct(data.data);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * HANDLE ADD TO CART
   */
  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary mt-3">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Toast notification */}
      <Toast
        show={showToast}
        message={`${product.name} added to cart!`}
        onClose={() => setShowToast(false)}
      />

      {/* Breadcrumb navigation */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
          <li className="breadcrumb-item active">{product.name}</li>
        </ol>
      </nav>

      <div className="row">
        {/* Product image */}
        <div className="col-md-6 mb-4">
          <img
            src={product.image_url}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
          />
        </div>

        {/* Product information */}
        <div className="col-md-6">
          <h1 className="mb-3">{product.name}</h1>
          
          {/* Category badge */}
          <span className="badge bg-secondary mb-3">{product.category}</span>
          
          {/* Price */}
          <h2 className="text-primary mb-4">${product.price}</h2>
          
          {/* Description */}
          <h5>Description</h5>
          <p className="text-muted mb-4">{product.description}</p>
          
          {/* Stock info */}
          <p className="mb-4">
            <strong>Availability:</strong>{' '}
            <span className="text-success">In Stock ({product.stock} available)</span>
          </p>
          
          {/* Action buttons */}
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary btn-lg"
              onClick={handleAddToCart}
            >
              🛒 Add to Cart
            </button>
            <Link to="/products" className="btn btn-outline-secondary">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
