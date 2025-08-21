import React from 'react'
import './landing.css'
import headPhone from '../../../Images/headPhone.png'

function Landing() {
  return (
    <div className="landing">
        <div className="container">
           <div className="content">
            <p>Beats Solo</p>
            <h3>Wireless</h3>
            <h1>HeadPhone</h1>
             <button>Shope By Category</button>
           </div>

           <div className="image">
            <img src={headPhone} alt="" />
           </div>

           <p className="description">There are many verition passages Lorem
             ipsum dolor sit amet
             consectetur adipisicing elit. Nulla consequatur nemo eveniet repellendus!</p>
        </div>
    </div>
  )
}

export default Landing