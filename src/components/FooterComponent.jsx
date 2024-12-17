import React from "react";
import "../css/FooterComponent.css";


import FacebookIcon from "../assets/img/fb.png";
import TwitterIcon from "../assets/img/tw.png";
import InstagramIcon from "../assets/img/ig.png";

const FooterComponent = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo">
            <img
              src="src/assets/img/logo.png"
              alt="HydroCare logo"
              className="footer-logo-img"
            />
            <h2 className="footer-logo-text"></h2>
          </div>
  
          {/* Navigation Links */}
          <div className="footer-links">
            <div className="footer-column">
              <a className="footer-link">Help Center</a>
              <a className="footer-link">About</a>
              <a  className="footer-link">Contact us</a>
            </div>
            <div className="footer-column">
              <a className="footer-link">Discover</a>
              <a className="footer-link">Search</a>
            </div>
            <div className="footer-column">
              <a className="footer-link">SignUp</a>
              <a className="footer-link">Login</a>
            </div>
            <div className="footer-column">
              <a className="footer-link">News</a>
            </div>
          </div>
  
          {/* Social Media Links */}
      <div className="footer-socials">
        <a   className="social-icon">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a className="social-icon">
          <img src={TwitterIcon} alt="Twitter" />
        </a>
        <a className="social-icon">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
      </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2024 All rights reserved
          </p>
          <div className="footer-privacy">
            <a className="footer-link">Privacy & Policy</a>
            <a className="footer-link">Terms & Condition</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default FooterComponent;