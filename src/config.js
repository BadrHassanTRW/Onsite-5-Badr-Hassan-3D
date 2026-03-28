// API Configuration
// Update this URL with your InfinityFree domain

const API_BASE_URL = 'https://yoursite.infinityfreeapp.com/backend';

// For local development, use:
// const API_BASE_URL = 'http://localhost/Badr%20Hassan%20Onsite%205%203D/backend';

export const API_ENDPOINTS = {
  GET_PRODUCTS: `${API_BASE_URL}/get_products.php`,
  GET_PRODUCT: `${API_BASE_URL}/get_product.php`,
  CHECKOUT: `${API_BASE_URL}/checkout.php`
};
