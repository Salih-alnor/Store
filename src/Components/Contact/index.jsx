import React from 'react'
import './contact.css'
import { TfiMapAlt, TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";

function Contact() {
  return (
    <div className="contact-us">
      <h2 className="title">Contact Us</h2>
      <div className="container">
        <div className="addresses">
          <div className="address">
            <div className="icon">
              <TfiMapAlt />
            </div>
            <h3 className="title">Address</h3>
            <div className="subTitle">
              <p>Sudan - Khartoum - 50996</p>
            </div>
          </div>

          <div className="email">
            <div className="icon">
              <TfiEmail />
            </div>
            <h3 className="title">Email</h3>
            <div className="subTitle">
              <p>salihalnor1996@gmail.com</p>
              <p>sali777733@gmail.com</p>
            </div>
          </div>

          <div className="phone">
            <div className="icon">
              <BsTelephone />
            </div>
            <h3 className="title">Phones</h3>
            <div className="subTitle">
              <p>+249905518697</p>
              <p>+249121165274</p>
            </div>
          </div>
        </div>

          {/* --------------form------------ */}
          
        <form action="" className="form">
           <div className="info">
              <h3>GET IN TOUCH</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
                 id cupiditate molestias
                 praesentium aspernatur quisquam dolores repellat eos?</p>
              <input type="text" placeholder='Name'/>
              <input type="phone" placeholder='Phone'/>
              <br />
              <input type="email" placeholder='Email'/>
              <input type="text" placeholder='Subject'/>
              <br />
              <textarea placeholder='Your Message'></textarea>
              <button>Send Message</button>
           </div>
           <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123029.72434424993!2d32.65482625319017!3d15.501695327830433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168e8fde9837cabf%3A0x191f55de7e67db40!2z2KfZhNiu2LHYt9mI2YXYjCDYp9mE2LPZiNiv2KfZhg!5e0!3m2!1sar!2ssa!4v1685137270068!5m2!1sar!2ssa"  height="450"  allowfullscreen="" loading="lazy" title="map" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>
        </form>
      </div>
    </div>
        
  )
}

export default Contact
