// Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWordpress,
} from "react-icons/fa";
import { FaPhone, FaEnvelope, FaComments } from "react-icons/fa6";
import "../assets/style/footer.css"; 

const Footer = () => {
  return (
    <footer className="footerr_body">
      <div className="footerr_container">
        {/* Contact Section */}
        <div className="footerr_section">
          <h4 className="footerr_title">
            <FaComments /> Chat With Sales
          </h4>
          <p className="footerr_info">
            <FaPhone /> 1 (888) 602-6756
          </p>
          <p className="footerr_info">
            <FaEnvelope /> sales@pressable.com
          </p>
        </div>

        {/* Solutions */}
        <div className="footerr_section">
          <h4 className="footerr_subtitle">Solutions</h4>
          <ul className="footerr_list">
            <li>Managed WordPress Hosting</li>
            <li>Agencies</li>
            <li>Small & Medium-Sized Businesses</li>
            <li>Freelancers</li>
            <li>High-Traffic Websites</li>
            <li>WooCommerce</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footerr_section">
          <h4 className="footerr_subtitle">Company</h4>
          <ul className="footerr_list">
            <li>About Us</li>
            <li>Careers</li>
            <li>Customer Stories</li>
            <li>Contact</li>
            <li>Legal</li>
            <li>Press Kit</li>
          </ul>
        </div>

        {/* Resources + Social */}
        <div className="footerr_section">
          <h4 className="footerr_subtitle">Resources</h4>
          <ul className="footerr_list">
            <li>Blog</li>
            <li>eBooks</li>
            <li>Knowledge Base</li>
            <li>Customer Reviews</li>
            <li>Affiliate Program</li>
            <li>Strategic Partners</li>
          </ul>
          <div className="footerr_socials">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footerr_bottom">
        <div className="footerr_powered">
          <FaWordpress />
          <span>Powered by AMA</span>
        </div>
        <a href="#" className="footerr_link">
          Host With Pressable
        </a>
      </div>
    </footer>
  );
};

export default Footer;
