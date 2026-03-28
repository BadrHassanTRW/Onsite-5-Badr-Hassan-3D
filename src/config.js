// API Configuration - Using Netlify Functions as proxy
const API_BASE_URL = '/.netlify/functions';

export const API_ENDPOINTS = {
  GET_PRODUCTS: `${API_BASE_URL}/products`,
  GET_PRODUCT: `https://badronsite5.great-site.net/backend/get_product.php`,
  CHECKOUT: `https://badronsite5.great-site.net/backend/checkout.php`
};

// Debug log
console.log('API Base URL:', API_BASE_URL);
console.log('Endpoints:', API_ENDPOINTS);
