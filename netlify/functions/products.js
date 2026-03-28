// Netlify serverless function to proxy backend requests
exports.handler = async (event) => {
  const API_BASE = 'https://badronsite5.great-site.net/backend';
  
  try {
    const response = await fetch(`${API_BASE}/get_products.php`);
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch products' })
    };
  }
};
