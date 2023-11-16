import React from 'react'
import "./footer.css"
import {AiFillFacebook, AiOutlineTwitter} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Hasnain</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonial">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook..com"><AiFillFacebook/></a>
        <a href="https://facebook..com"><BsInstagram/></a>
        <a href="https://facebook..com"><AiOutlineTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small> ©: Hasnain Ansari, All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer