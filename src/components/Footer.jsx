// Footer component
function Footer() {
  return (
    <footer className="py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>ShopEasy</h5>
            <p className="text-muted">
              Your one-stop shop for quality products at great prices.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/products" className="text-muted text-decoration-none">Products</a></li>
              <li><a href="/about" className="text-muted text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-muted text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p className="text-muted">
              Email: support@shopeasy.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>

        <div className="text-center pt-3 border-top border-secondary">
          <p className="text-muted mb-0">
            © 2026 ShopEasy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
