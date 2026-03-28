/**
 * CONTACT US PAGE
 * Static page with contact information and form
 */

import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  /**
   * HANDLE INPUT CHANGE
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /**
   * HANDLE FORM SUBMIT
   * Note: This is a demo form - it doesn't actually send emails
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Hide success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Contact Us</h1>

      <div className="row">
        {/* Contact information */}
        <div className="col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title mb-4">Get in Touch</h5>
              
              {/* Address */}
              <div className="mb-4">
                <h6>📍 Address</h6>
                <p className="text-muted">
                  123 Shopping Street<br />
                  Commerce City, CC 12345<br />
                  United States
                </p>
              </div>

              {/* Phone */}
              <div className="mb-4">
                <h6>📞 Phone</h6>
                <p className="text-muted">(555) 123-4567</p>
              </div>

              {/* Email */}
              <div className="mb-4">
                <h6>✉️ Email</h6>
                <p className="text-muted">support@shopeasy.com</p>
              </div>

              {/* Hours */}
              <div className="mb-4">
                <h6>🕐 Business Hours</h6>
                <p className="text-muted">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="col-lg-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Send us a Message</h5>

              {submitted && (
                <div className="alert alert-success" role="alert">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Your Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Subject */}
                <div className="mb-3">
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label className="form-label">Message *</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-lg">
                  Send Message
                </button>
              </form>

              <div className="alert alert-info mt-4">
                <small>
                  ℹ️ This is a demo contact form. Messages are not actually sent.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
