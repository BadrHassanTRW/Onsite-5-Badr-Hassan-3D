// API Configuration
const API_BASE_URL = 'http://localhost/Badr%20Hassan%20Onsite%205%203D/backend';

export const API_ENDPOINTS = {
  GET_PRODUCTS: `${API_BASE_URL}/get_products.php`,
  GET_PRODUCT: `${API_BASE_URL}/get_product.php`,
  CHECKOUT: `${API_BASE_URL}/checkout.php`
};

// JSON fallback data
import productsData from './data/products.json';

// Fetch with fallback
export const fetchWithFallback = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('API failed');
    return await response.json();
  } catch (error) {
    console.warn('PHP API failed, using JSON fallback');
    
    // Return JSON data based on endpoint
    if (url.includes('get_products.php')) {
      return productsData.products;
    }
    
    if (url.includes('get_product.php')) {
      const urlParams = new URLSearchParams(url.split('?')[1]);
      const id = parseInt(urlParams.get('id'));
      const product = productsData.products.find(p => p.id === id);
      return product || null;
    }
    
    // Checkout fallback
    if (url.includes('checkout.php')) {
      console.log('Order placed (JSON mode):', options.body);
      return { success: true, message: 'Order placed successfully (offline mode)' };
    }
    
    throw error;
  }
};
