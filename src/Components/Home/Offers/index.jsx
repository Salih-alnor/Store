import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";




// import required modules
// import { Pagination } from "swiper";


import './offers.css'
import data from '../../../Data/Offers/data'
import {  } from 'react-icons/fa';

function Offers() {
  return (
    <div className="offers">
        <div className="container">
        <Swiper
    slidesPerView={2}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      680: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      780: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }}
    // modules={[Pagination]}
    className="mySwiper cards"
  >
    {
              data.map((item, index) => {
                return(
                  <SwiperSlide className="card" key={index}>
                  <div className="offer">
                    <h4 className="product-name">{item.productName}</h4>
                    <p>{item.offer}</p>
                    <button>Shpoe</button>
                  </div>
                  <div className="image"><img src={item.image} alt="" /></div>
                </SwiperSlide>
                )
              })
            }
  </Swiper>
        </div>
    </div>

  )
}

export default Offers