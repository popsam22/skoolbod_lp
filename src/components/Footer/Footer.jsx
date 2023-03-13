import React from 'react'
import './Footer.css'
import logo from '../../assets/skoolbod_logo.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='app__footer-links'>
      <div className='app__footer-links-logo'>
        <img src={logo} alt="logo" />
        <p>Suite 109, Trinity Plaza, Obafemi Awolowo way, Ikeja, Lagos State.</p>
      </div>
      <div className='app__footer-links-div'>
        <div className='app__footer-link-div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='app__footer-link-div'>
          <h4>Get In Touch</h4>
          <div>
            <MdOutlineEmail />
            <p>contact@skoolbod.com</p>
          </div>
          <div>
            <FaPhoneAlt />
            <p>+234 904 000 0199</p>
          </div>
          <div>
            <FaPhoneAlt />
            <p>+234 913 200 2009</p>
          </div>
        </div>
        <div className='app__footer-link-div'>
          <FaInstagram className='social-icon' />
          <FaFacebook className='social-icon' />
          <FaLinkedin className='social-icon' />
          <FaWhatsapp className='social-icon' />
        </div>
      </div>
      <div className='app__footer-copyright'>
        <p>&#169; 2023 Zenkleus. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer