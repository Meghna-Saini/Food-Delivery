import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className="footer-content">

        {/* Left Section */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="Food Delivery Logo" />

          <p>
            Bringing your favorite meals right to your doorstep.
            Fast delivery, fresh food, and an amazing dining experience
            from the best restaurants in your city.
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2>Quick Links</h2>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-content-right">
          <h2>Contact Us</h2>
          <ul>
            <li>📍 Haryana, India</li>
            <li>📞 +91 98765 43210</li>
            <li>✉ support@fooddelivery.com</li>
            <li>🕒 Open: 9:00 AM - 11:00 PM</li>
          </ul>
        </div>

      </div>

      <hr />

      <p className="footer-copyright">
        © {new Date().getFullYear()} Food Delivery. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
