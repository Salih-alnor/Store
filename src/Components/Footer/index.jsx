import React from 'react'
import './footer.css'
import { FaInstagram, FaLinkedinIn, FaShopify, FaSnapchatGhost, FaTwitter} from 'react-icons/fa'
import pay1 from '../../Images/pay-1.png'
import pay2 from '../../Images/pay-2.png'
import pay3 from '../../Images/pay-3.png'
import pay4 from '../../Images/pay-4.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">

         <div className="pay">
            <h3>Payment Methods</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               In commodi quasi dolorum voluptatibus sunt saepe at qui similique ea alias.</p>
            <h4>Choose payment method:</h4>
            <div className="links">
              <Link to="#"><img src={pay1} alt="a" /></Link>
              <Link to="#"><img src={pay2} alt="a" /></Link>
              <Link to="#"><img src={pay3} alt="a" /></Link>
              <Link to="#"><img src={pay4} alt="a" /></Link>
            </div>
          </div> 

          <div className="links-section">
            <h3>Quick Links</h3>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="product">Products</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <div className="icons">
                 <FaInstagram className='icon'/>
                 <FaTwitter className='icon'/>
                 <FaLinkedinIn className='icon'/>
                 <FaSnapchatGhost className='icon'/>
            </div>
            </ul>
          </div>

          <div className="contact">
            <h3>Contact</h3>
            <p>+99 (0) 101000 888 Patrici C</p>
            <p>Amedee 4401 Watteck Street</p>
            <p>Grapvine Nashvle, Tx 76051</p>
            <form action="">
              <input type="email" placeholder='Enter your email'/>
              <button>Subscribe</button>
            </form>

          </div>

          <div className="logo-section">
            <div className="logo"><FaShopify className='icon'/>
               <span>Shoping</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum exercitationem
               quaerat iusto recusandae ad? Iusto,
               libero reprehenderit earum excepturi nemo id ex sint pariatur doloribus?</p>
            <div className="copy-right">
            © 2022-Shoping All Right Reserved
            </div>
          </div>
      </div>    
    </div>
  )
}
