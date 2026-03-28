/**
 * ABOUT US PAGE
 * Static informational page about the company
 */

function About() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="text-center mb-5">About ShopEasy</h1>

          {/* Company story */}
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Our Story</h3>
              <p className="card-text">
                ShopEasy was founded in 2026 with a simple mission: to make online shopping 
                easy, affordable, and enjoyable for everyone. We believe that quality products 
                should be accessible to all, which is why we carefully curate our selection 
                to bring you the best items at competitive prices.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Our Mission</h3>
              <p className="card-text">
                We strive to provide our customers with:
              </p>
              <ul>
                <li>High-quality products from trusted brands</li>
                <li>Competitive prices and great deals</li>
                <li>Fast and reliable shipping</li>
                <li>Excellent customer service</li>
                <li>A seamless shopping experience</li>
              </ul>
            </div>
          </div>

          {/* Values */}
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Our Values</h3>
              <div className="row text-center">
                <div className="col-md-4 mb-3">
                  <div className="p-3">
                    <h1>🎯</h1>
                    <h5>Quality</h5>
                    <p className="text-muted">We never compromise on product quality</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="p-3">
                    <h1>💰</h1>
                    <h5>Value</h5>
                    <p className="text-muted">Best prices for premium products</p>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="p-3">
                    <h1>❤️</h1>
                    <h5>Service</h5>
                    <p className="text-muted">Customer satisfaction is our priority</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-5">
            <h4 className="mb-3">Ready to start shopping?</h4>
            <a href="/products" className="btn btn-primary btn-lg">
              Browse Our Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
