import React, { useState } from 'react'
import './style.css'
import {FaShopify , FaBars} from 'react-icons/fa'
import {NavLink } from 'react-router-dom'
import Data from '../../Data/Navbar/Data'
// import { BsCartPlusFill } from 'react-icons/bs';

function Navbar() {

    const [show, setShow] = useState(false);

     function Show() {
        if(show === false) {
            setShow(true)
        } else{
            setShow(false)
        }
     }

     function Hide() {
        setShow(false)
     }

  return (
    <div className="navbar">
    <div className="container">
        <div className="logo"><FaShopify className='icon'/>
            <span>Shoping</span>
        </div>

        <div className="link">
            
            
            <ul className={show ? 'show' : 'hide'}>
               {
                Data.map((item, index) => {
                     return(
                        <li onClick={Hide} key={index}><NavLink to={item.to} >{item.name}</NavLink></li>
                     )
                })
               }
            </ul>
            
        </div>

        <div className="signing" >
            {/* <BsCartPlusFill /> */}
        <button>Login</button>
        <button>Sign Up</button>
        <FaBars className='bars' onClick={Show}/>
        </div>
    </div>
</div>
  )
}

export default Navbar




