/**
 * SHOPPING CART PAGE
 * Displays all items in cart with ability to update quantities and remove items
 */

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  // Set page title
  useEffect(() => {
    document.title = 'ShopEasy - Shopping Cart';
  }, []);

  /**
   * HANDLE QUANTITY CHANGE
   * Updates the quantity of a product in cart
   */
  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = parseInt(newQuantity);
    if (quantity > 0) {
      updateQuantity(productId, quantity);
    }
  };

  // If cart is empty, show empty cart message
  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <div className="py-5">
          <h2 className="mb-4">Your cart is empty</h2>
          <p className="text-muted mb-4">Add some products to get started!</p>
          <Link to="/products" className="btn btn-primary btn-lg">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">Shopping Cart</h1>

      <div className="row">
        {/* Cart items section */}
        <div className="col-lg-8">
          {cart.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                {/* Product image */}
                <div className="col-md-3">
                  <img
                    src={item.image_url}
                    className="img-fluid rounded-start"
                    alt={item.name}
                    style={{ height: '150px', objectFit: 'cover', width: '100%' }}
                  />
                </div>

                {/* Product details */}
                <div className="col-md-9">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h5 className="card-title">{item.name}</h5>
                        <p className="text-muted mb-2">${item.price} each</p>
                      </div>
                      {/* Remove button */}
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ✕ Remove
                      </button>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-3">
                      {/* Quantity selector */}
                      <div className="d-flex align-items-center">
                        <label className="me-2">Quantity:</label>
                        <input
                          type="number"
                          className="form-control form-control-sm"
                          style={{ width: '80px' }}
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        />
                      </div>

                      {/* Subtotal */}
                      <div>
                        <strong className="text-primary">
                          Subtotal: ${(item.price * item.quantity).toFixed(2)}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary section */}
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Order Summary</h5>
              
              {/* Cart items list */}
              <div className="mb-3">
                {cart.map((item) => (
                  <div key={item.id} className="d-flex justify-content-between mb-2">
                    <span className="text-muted">
                      {item.name} × {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <hr />

              {/* Total */}
              <div className="d-flex justify-content-between mb-4">
                <h5>Total:</h5>
                <h5 className="text-primary">${getCartTotal().toFixed(2)}</h5>
              </div>

              {/* Checkout button */}
              <div className="d-grid gap-2">
                <Link to="/checkout" className="btn btn-primary btn-lg">
                  Proceed to Checkout
                </Link>
                <Link to="/products" className="btn btn-outline-secondary">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
