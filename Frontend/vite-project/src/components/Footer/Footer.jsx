import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p>"Tomato is the best food delivery service in Delivering fresh, delicious meals right to your doorstep with a seamless experience. Enjoy emerging culinary trends from local favorites and beyond!"</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
           <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
           </ul>
        </div>
        <div className="footer-content-right">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+92-311-4446-561</li>
            <li>contact@tomato.com</li>
           </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>copyright © 2024 Tomato.com - All rights reserved</p>
    </div>
  )
}

export default Footer
