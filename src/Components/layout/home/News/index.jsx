import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper";
import { Link } from 'react-router-dom'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './news.css'
import {FaTwitterSquare, FaInstagramSquare, FaLinkedin,} from 'react-icons/fa';

// import "./styles.css";

// import required modules

import Data from '../../../../Data/News/Data'

export default function News() {
  return (
    <div className="news">
      <div className="mainTitle">
        <h1>Recent News</h1>
        <p>There are many variations passages</p>
      </div>
     <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}

        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay]}

        breakpoints={{
         
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}

        className="mySwiper cards"
      >
        
        {
           Data.map((item, index) => {
            return(
              <SwiperSlide className="card" key={index}>
                <div className="image">
                  <div className="social">
                    <p className="icon"><FaInstagramSquare className="i"/></p>
                    <p className="icon"><FaTwitterSquare className="i"/></p>
                    <p className="icon"><FaLinkedin className="i"/></p>
                  </div>
                  <img src={item.image} alt="" />
                </div>
                <div className="newsContent">
                  <span className="date">{item.date}</span>
                  <h3 className="title">{item.title}</h3>
                  <p className="subTitle">{item.subTitle}</p>
                  <p><Link to="#">Read More...</Link></p>
                </div>
              </SwiperSlide>
            )
           } )
        }
      </Swiper>
      </div>
    </div>
  );
}
