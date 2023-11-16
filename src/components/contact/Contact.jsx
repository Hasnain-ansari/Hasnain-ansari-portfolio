import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {BsInstagram, BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v5n7x14', 'template_gm4icjd', form.current, '2GXiSk4USp22QVgF9')
      .then((result) => {
          console.log(result.text);
          alert("message sent")
      },(error) => {
          console.log(error.text);
          alert("message not sent")
      });

    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>hasnaiansari9757@gmail.com</h5>
            <a href="mailto:hasnainansari9757work@gmail.com">send a message</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>hasnain_._ansari</h5>
            <a href="https://www.instagram.com/hasnain_._ansari/" target='blank'>send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://wa.me/+919653468367?text=Hello" target='blank'>send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" id="" placeholder='Your Email' required/>
          <textarea name="message" id=""  rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
