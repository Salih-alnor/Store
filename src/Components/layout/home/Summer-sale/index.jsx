import React from "react";
import Data from '../../../../Data/SummerSale/Data'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
// import required modules
import { Autoplay} from "swiper";
import './style.css'


function SummerSale() {
  return (
    <div className="summerSale">
        <div className="container">
        <Swiper
         spaceBetween={30}
         centeredSlides={true}
         loop={true}
         autoplay={{
           delay: 10000,
           disableOnInteraction: false,
         }}
         
         modules={[Autoplay]}
        className="mySwiper"
      >
           {
            Data.map((item, index) => {
                return (
                    <SwiperSlide className="product" key={index}>
                        <div className="content-1">
                           <p>{item.offer}</p>
                           <h1>{item.description}</h1>
                           <p>{item.date}</p>
                         </div>

                         
                           <div className="image">
                             <img src={item.image} alt="" />
                           </div>
                        

                         <div className="content-2">
                            <p>Beats Solo Air</p>
                            <h3>Summer Sale</h3>
                            <p>Company that's grown from 270 to 460 <br />employees in the last 12 months.</p>
                            <button>Read More</button>
                          </div>
                    </SwiperSlide>
                )
            })
           }
           </Swiper>
        </div>
    </div>
  )
}

export default SummerSale