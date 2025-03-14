import React from "react";
import "./contact.css";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const emailSubject = `Contact Form: ${subject}`;
    const emailBody = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const mailtoLink = `mailto:futuremindds@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Contact Us</h1>
            <p className="hero-description">
              Have questions about our summer camp? We're here to help! Get in touch with us.
            </p>
          </div>
        </div>
        <div className="hero-pattern"></div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2 className="form-title">Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      className="form-input"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      className="form-input"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="form-input"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <select
                    name="subject"
                    id="subject"
                    className="form-select"
                    required
                  >
                    <option value="" disabled selected>
                      Select a subject
                    </option>
                    <option value="Enrollment Information">
                      Enrollment Information
                    </option>
                    <option value="Activities Information">
                      Activities Information
                    </option>
                    <option value="Fees and Payment">
                      Fees and Payment
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-textarea"
                    placeholder="Enter your message"
                    rows="5"
                    style={{ fontFamily: "sans-serif" }}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  Send Message
                  <span className="button-icon"></span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-container">
              <div className="info-header">
                <h2 className="info-title">Contact Information</h2>
                <p className="info-description">
                  Feel free to reach out to us with any questions or concerns.
                  We're always happy to help!
                </p>
              </div>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon location-icon"></div>
                  <div className="info-content">
                    <h3 className="info-label">Address</h3>
                    <p className="info-text">
                      Block No 15, Ahilyadevi Nagar, Behind Aasra Petrol Pump and
                      Mantri Chandak Estate, Hatgi Road Solapur.
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon phone-icon"></div>
                  <div className="info-content">
                    <h3 className="info-label">Phone</h3>
                    <p className="info-text">
                      <a href="tel:+919146099742" className="info-link">
                        +91 91460 99742
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon email-icon"></div>
                  <div className="info-content">
                    <h3 className="info-label">Email</h3>
                    <p className="info-text">
                      <a href="mailto:futuremindds@gmail.com" className="info-link">
                        futuremindds@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon time-icon"></div>
                  <div className="info-content">
                    <h3 className="info-label">Office Hours</h3>
                    <p className="info-text">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-header">
            <h2 className="map-title">Find Us</h2>
            <p className="map-description">
              Visit our location to learn more about our summer camp program.
            </p>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.1829780198827!2d75.91746802174946!3d17.639530754969467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5db0061a64ac9%3A0x7a4394b4bac59d8c!2sMantri%20chandak%20as!5e1!3m2!1sen!2sin!4v1741949864850!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="map-placeholder"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
