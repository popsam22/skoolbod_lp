import React from 'react'
import './Footer.css'
import logo from '../../assets/skoolbod_logo.png'

const Footer = () => {
  return (
    <div className='app__footer-links'>
        <div className='app__footer-links-logo'>
          <img src={logo} alt="logo" />
          <p>Suite 109, Trinity Plaza, Obafemi Awolowo way, Ikeja, Lagos State.</p>
        </div>
        <div className='app__footer-links-div'>
          <h4>Links</h4>
           <p>Instagram</p>
           <p>Facebook</p>
           <p>LinkedIn</p>
           <p>Whatsapp</p>
        </div>
        <div className='app__footer-links-div'>
          <h4>Company</h4>
           <p>Terms & Conditions</p>
           <p>Privacy Policy</p>
           <p>Contact</p>
        </div>
        <div className='app__footer-links-div'>
          <h4>Get in touch</h4>
           <p>Suite 109, Trinity Plaza, Obafemi Awolowo way, Ikeja, Lagos State.</p>
           <p>contact@skoolbod.com</p>
           <p>+234 904 000 0199 , <br /> +234 913 200 2009</p>
           
        </div>
        <div className='app__footer-copyright'>
          <p>&#169; 2023 Zenkleus. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer