import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">TechCo</h3>
            <p className="footer-text">Innovating for a better tomorrow</p>
          </div>
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/blogs" className="footer-link">Blogs</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li><a href="/services/web-development" className="footer-link">Web Development</a></li>
              <li><a href="/services/mobile-apps" className="footer-link">Mobile Apps</a></li>
              <li><a href="/services/cloud-solutions" className="footer-link">Cloud Solutions</a></li>
              <li><a href="/services/ai-ml" className="footer-link">AI & Machine Learning</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-socials">
              <a href="#" className="footer-icon"><Facebook /></a>
              <a href="#" className="footer-icon"><Twitter /></a>
              <a href="#" className="footer-icon"><Instagram /></a>
              <a href="#" className="footer-icon"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 TechCo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
