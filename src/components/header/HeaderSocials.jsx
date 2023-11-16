import React from 'react'
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/hasnainansari786/" target='blank'><BsLinkedin/></a>
        <a href="https://www.github.com/Hasnain-ansari/" target='blank'><BsGithub/></a>
        <a href="https://www.instagram.com/hasnain_._ansari/" target='blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials