/**
 * CHECKOUT PAGE
 * Customer form to complete the order
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { API_ENDPOINTS } from '../config';

function Checkout() {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  
  // Form state
  const [formData, setFormData] = useState({
    customer_name: '',
    email: '',
    address: '',
    phone: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Set page title
  useEffect(() => {
    document.title = 'ShopEasy - Checkout';
  }, []);

  // Redirect to cart if cart is empty
  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Your cart is empty</h2>
        <p className="text-muted">Add items to cart before checkout</p>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate('/products')}
        >
          Browse Products
        </button>
      </div>
    );
  }

  /**
   * HANDLE INPUT CHANGE
   * Updates form data when user types
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /**
   * HANDLE FORM SUBMIT
   * Sends order data to PHP backend
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Prepare order data
      const orderData = {
        ...formData,
        total_amount: getCartTotal(),
        cart_items: cart
      };

      // Send POST request to PHP checkout API
      const response = await fetch(API_ENDPOINTS.CHECKOUT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      const data = await response.json();

      if (data.success) {
        // Clear cart and show success message
        clearCart();
        alert(`Order placed successfully! Order ID: ${data.order_id}`);
        navigate('/');
      } else {
        setError(data.message || 'Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4">Checkout</h1>

      <div className="row">
        {/* Checkout form */}
        <div className="col-lg-7">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Customer Information</h5>

              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-3">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* Address */}
                <div className="mb-3">
                  <label className="form-label">Delivery Address *</label>
                  <textarea
                    className="form-control"
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Place Order'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="col-lg-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Order Summary</h5>

              {/* Cart items */}
              <div className="mb-3">
                {cart.map((item) => (
                  <div key={item.id} className="d-flex justify-content-between mb-3">
                    <div>
                      <strong>{item.name}</strong>
                      <br />
                      <small className="text-muted">
                        ${item.price} × {item.quantity}
                      </small>
                    </div>
                    <div>
                      <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                    </div>
                  </div>
                ))}
              </div>

              <hr />

              {/* Total */}
              <div className="d-flex justify-content-between mb-3">
                <h5>Total Amount:</h5>
                <h5 className="text-primary">${getCartTotal().toFixed(2)}</h5>
              </div>

              <div className="alert alert-info">
                <small>
                  ℹ️ This is a demo checkout. No real payment is processed.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
