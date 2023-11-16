import React, {useState} from 'react'
import "./nav.css"
// import {AiOutlineHome} from 'react-icons/ai'
// import {AiOutlineMessage} from 'react-icons/ai'
// import {SiAboutdotme} from 'react-icons/si'
// import {FaServicestack} from 'react-icons/fa'
// import {BiSolidUserCheck} from 'react-icons/bi'

const Nav = () => {

  const [activeNav, setActiveNAv] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNAv('#')} className={activeNav === '#' ? 'active' : ''}> Home</a>
      <a href="#about" onClick={() => setActiveNAv('#about')} className={activeNav === '#about' ? 'active' : ''} >About</a>
      <a href="#experience" onClick={() => setActiveNAv('#experience')} className={activeNav === '#experience' ? 'active' : ''} >experience</a>
      <a href="#portfolio" onClick={() => setActiveNAv('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} >portfolio</a>
      <a href="#contact" onClick={() => setActiveNAv('#contact')} className={activeNav === '#contact' ? 'active' : ''} >contact</a>
    </nav>
  )
}

export default Nav