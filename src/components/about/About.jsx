import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.png"
import {FiAward} from "react-icons/fi"
import {FiUsers} from "react-icons/fi"

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              {/* <small>3+ years</small> */}

            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Portfolio</h5>
              <a href="#portfolio">click here</a>

            </article>

            <article className="about__card">
              <FiAward className='about__icon'/>
              <h5>Projects</h5>
              <small>25+ completed</small>
              <div>
              <a href="https://github.com/Hasnain-ansari">Github</a>

              </div>

            </article>
          </div>

          <p>
        Motivated front-end. web developer, software developer, full stack developer with a Bachelor's degree in
        Information Technology Proficient in HTML5, CSS, Bootstrap, and JavaScript. Skilled in React.js, Hooks, Context 
        API. Developed 10+ web apps, ensuring responsiveness and user-friendly interfaces REST APIs in 25+ projects for 
        real-time data updates. Proven problem- solving skills, resolving 20+ complex issues with a 25% decrease in 
        downtime. Committed to continuous learning, completing. 6 online courses. Seeking opportunities to contribute 
        to front-end Project, Software Development and deliver impactful solutions with a passion for coding and quick 
        learning ability

          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About