import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import './clients.css'
import "swiper/css/pagination";
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import {AiFillDislike, AiFillLike} from 'react-icons/ai';


import Data from '../../../../Data/Clients/Data'

function Clients() {
  return (
    <div className="clients">
        <h2>Client's Review</h2>
        <div className="container">
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        

        


        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 40,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}

        className="mySwiper cards"
      >
        
        {
           Data.map((item, index) => {
            return(
              <SwiperSlide className="card" key={index}>
                  <div className="head">
                  <div className="image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="name">
                    <h3>{item.name}</h3>
                    <span>{item.job}</span>
                  </div>
                  </div>
                 <div className="icons">
                 <div className="stars">
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStarHalfAlt className="star"/>
                  </div>
                  <div className="like">
                    <AiFillLike className="icon"/>
                    <AiFillDislike className="icon"/>
                  </div>
                 </div>
                  <div className="client-content">
                    <p className="description">{item.description}</p>
                  </div>
              </SwiperSlide>
            )
           } )
        }
      </Swiper>
        </div>
    </div>
  )
}

export default Clients