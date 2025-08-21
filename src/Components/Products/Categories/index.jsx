import React from 'react'
import './categories.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Data from '../../../Data/Categories/Data'

function Categories() {
  return (
    <div className='categories'>
        <h2>Shope By Categories</h2>
        <div className="container">
        <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          680: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          780: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        className="mySwiper cards"
      >
        {
            Data.map((item, index) => {
                return(
                    <SwiperSlide className="card" key={index}>
                     <div className="image">
                       <img src={item.image} alt="" />
                     </div>
                     <h4 className="category-name">{item.categoryName}</h4>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
        </div>
    </div>
  )
}

export default Categories




