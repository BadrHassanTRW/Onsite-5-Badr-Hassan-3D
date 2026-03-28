// API Configuration - Production
const API_BASE_URL = 'https://badronsite5.great-site.net/backend';

export const API_ENDPOINTS = {
  GET_PRODUCTS: `${API_BASE_URL}/get_products.php`,
  GET_PRODUCT: `${API_BASE_URL}/get_product.php`,
  CHECKOUT: `${API_BASE_URL}/checkout.php`
};

// Debug log
console.log('API Base URL:', API_BASE_URL);
console.log('Endpoints:', API_ENDPOINTS);
