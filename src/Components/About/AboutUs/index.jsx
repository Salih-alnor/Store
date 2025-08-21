import React from 'react'
import { FaShopify} from 'react-icons/fa'
import './AboutUs.css'

function AboutUs() {
  return (
    <div className="about-us">
    <div className="container">
      <div className="about-us-logo">
          <div className="logo">
            <FaShopify className='icon'/>
            <span>Shoping</span>
          </div>
      </div>
       <div className="about-us-content">
         <h2>ABOUT US</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate minus, laborum dolorem beatae laudantium ratione, magnam earum aperiam esse maxime quae amet commodi quasi rerum illo. Quidem, illum. Itaque impedit voluptatum suscipit ipsum illo iusto optio provident dolor possimus laboriosam?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquam rerum dolor itaque! Necessitatibus molestias sunt, exercitationem veniam at maiores quo dolores.</p>
         <button>Learn More</button>
       </div>
     </div>
   </div>
  )
}

export default AboutUs