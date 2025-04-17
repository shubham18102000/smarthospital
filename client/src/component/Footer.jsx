import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Hospital Information */}
          <div className="footer-section hospital-info">
            <h4>Hospital Management System</h4>
            <p>Delivering comprehensive, compassionate, and quality healthcare.</p>
            <p>Open 24/7 - Emergency services always available.</p>
          </div>

          {/* Contact Information */}
          <div className="footer-section contact-info">
            <h4>Contact Us</h4>
            <p><strong>Uttaranchal University, UK</strong></p>
            <p>123 Health Ave, Dehradun, Uttarakhand</p>
            <p>Phone: +44 1234 567890</p>
            <p>Email: contact@hospital.com</p>
          </div>

          {/* Important Links */}
          <div className="footer-section important-links">
            <h4>Important Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#doctors">Find a Doctor</a></li>
              <li><a href="#appointments">Book an Appointment</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="footer-section social-media">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Hospital Management System. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        .footer {
          background-color: #fff;
          color: #333;
          padding: 50px 20px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-width: 1200px;
          margin: auto;
        }

        .footer-section {
          flex: 1 1 220px;
          margin: 20px;
        }

        .footer-section h4 {
          font-size: 20px;
          margin-bottom: 15px;
          color: #004080;
        }

        .footer-section p,
        .footer-section li {
          font-size: 14px;
          line-height: 1.8;
        }

        .important-links ul {
          list-style: none;
          padding: 0;
        }

        .important-links li a {
          text-decoration: none;
          color: #555;
          transition: color 0.3s;
        }

        .important-links li a:hover {
          color: #004080;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icons a {
          font-size: 18px;
          color: #444;
          transition: color 0.3s;
        }

        .social-icons a:hover {
          color: #004080;
        }

        .footer-bottom {
          text-align: center;
          padding: 20px 0 10px;
          border-top: 1px solid #eee;
          font-size: 13px;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
          }

          .footer-section {
            margin: 15px 0;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;

