import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import React from "react";
import { FaHeart, FaCartPlus, FaShare, FaStar, FaStarHalfAlt, FaSearch } from 'react-icons/fa';
import "./newProduct.css";
import Data from '../../../Data/NewProduct/data'




function NewProduct() {
  return (
     <div className="NewProduct">

        <h1>New Products</h1>
        <div className="container">
            <div className="cards">
                {Data.map((item, index) => {
                    return(
                        <div className="card" key={index}>
                             <Swiper className="mySwiper image">
                               {
                                item.images.map((item, index) => {
                                    return(
                                        <SwiperSlide key={index}>
                                          <img src={item} alt="" />
                                        </SwiperSlide>
                                    )
                                })
                               }
                             </Swiper>
                             <div className="icons">
                                    <div className="icon"><FaHeart /></div>
                                    <div className="icon"><FaShare /></div>
                                    <div className="icon"><FaSearch /></div>
                                    <div className="icon"><FaCartPlus /></div>
                                    
                                </div>
                                
                            <div className="description">
                            <div className="stars">
                                    <p className="icon"><FaStar /></p>
                                    <p className="icon"><FaStar /></p>
                                    <p className="icon"><FaStar /></p>
                                    <p className="icon"><FaStar /></p>
                                    <p className="icon"><FaStarHalfAlt /></p>
                                    <p> : 4.5</p>
                                </div>
                                <h3 className="productName">{item.title}</h3>
                                
                                <div className="price">
                                    <span className="after">{item.priceAfter}</span>
                                    <span className="before ">{item.priceBefor}</span>
                                   
                                </div>

                             
                                     
                                <div className="btns">
                                <button>Buy Now</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
     </div>
  )
}

export default NewProduct

