import React from 'react';
import './Contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { FaLinkedin, FaTwitter, FaGithub, FaDiscord, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa'; // Import phone and envelope icons

const Contact = () => {
  return (
    <>
      <Header />
      
      <div className="contact-container">
        <div className="contact-details">
          <div className="info">
            <h2>Contact Information</h2>
            <p>
              <strong>Phone:     </strong> 
              <a href="tel:+911234567890" className="phone-icon">
                <FaPhone />    +91 12345 67890
              </a>
            </p>
            <p>
              <strong>Email:   </strong> 
              <a href="mailto:harsh@example.com" className="email-icon">
                <FaEnvelope /> harsh@example.com
              </a>
            </p>
          </div>   
          <div className="social-icons text-center">
            <h2>Connect me on</h2>
            <a href="https://facebook.com" className="me-2"><img src="/images/facebook.png" alt="Facebook" /></a>
            <a href="https://twitter.com" className="me-2"><img src="/images/twitter.png" alt="Twitter" /></a>
            <a href="https://linkedin.com" className="me-2"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
            <a href="https://instagram.com" className="me-2"><img src="/images/instagram.png" alt="Instagram" /></a>
            <a href="https://discord.com" className="me-2"><img src="/images/discord.png" alt="Discord" /></a>
          </div>  
        </div>

        <div className="map">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6358762236435!2d144.96305851547684!3d-37.81210097975192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ced70!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1595839838427!5m2!1sen!2sin"
            width="100%" height="300px" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0">
          </iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
