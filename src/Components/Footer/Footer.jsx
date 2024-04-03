import React from 'react'
import './Footer.css'
import { FaFacebook,FaTwitter,FaWhatsapp} from "react-icons/fa";
import Logo from  "../Assets/Logo.png"

  

const Footer = () => {
  return (
    <div className='footer'>
      <hr />
        <div className="footer-logo">
        
            <img src={Logo} alt="" className='footer-logo1'/>
            <p>LEARNIFY</p>
        </div>
        <ul className='footer-links'>
          <li>Company</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          
            <FaFacebook />
            <FaTwitter/>
            <FaWhatsapp/>
            
          
        </div>
        <div className="footer-copyright">
          <hr />
          
          <p>Copyright @ 2023-All Right Reserved</p>
        </div>
   
    </div>
  )
}

export default Footer
