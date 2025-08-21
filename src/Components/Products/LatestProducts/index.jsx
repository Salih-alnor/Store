import React from 'react'
import Data from '../../../Data/LatestProducts/Data'
import './latestProducts.css'
import { AiFillHeart } from 'react-icons/ai';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';                     


function LatestProducts() {


  
  return (
    <div className="latest-products">
        <h2>Latest products</h2>
        <div className="container">
            <div className="cards">
                {
                    Data.map((item, index) => {
                    return(
                        <div className="card" key={index}>
                        <div className="image">
                          <img src={item.image} alt="" />
                        </div>
                         <AiFillHeart className='heart'/>
                        <div className="latest-content">
                           <div>
                           <h3 className="name">{item.nameProduct}</h3>
                           <p className="description">{item.description}</p>
                           <div className="stars">
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStarHalfAlt className='star' />
                                    <p> : 4.5</p>
                                </div>
                           </div>
                           <div>
                             <div className="price">
                               <p className="after">${item.priceAfter}</p>
                               <p className="before">${item.priceBefore}</p>
                             </div>
                             <div className="order">Order Now</div>
                           </div>
                        </div>
                       </div>
                    )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default LatestProducts