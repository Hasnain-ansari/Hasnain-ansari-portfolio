import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id='sercices'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <artice className="service">
          <div className="service__head">
            <h3>UI development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I can design webpages for you
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I have worked on many projects
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>react components & authentication
              </p>
            </li>
            
          </ul>
        </artice>

        <artice className="service">
          <div className="service__head">
            <h3>Mern development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed Recipe App uisng MERN Stack
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed Book Management App uisng MERN Stack
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developed Food Delivery APp uisng MERN Stack
              </p>
            </li>
            
            
          </ul>
        </artice>

        <artice className="service">
          <div className="service__head">
            <h3>C++ programming</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>100+ question solved in Leetcode
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Expert level in Coding-Ninjas
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>850+ score in GeekForGeeks
              </p>
            </li>
            
          </ul>
        </artice>
      </div>

    </section>
  )
}

export default Services