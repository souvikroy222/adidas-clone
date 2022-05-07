import React from 'react'
import { Pagination, Navigation, Autoplay } from "swiper";
import './Banners.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




      //slidesPerView={3}


const Banners = () => {
  return (
    <Swiper
    modules={[Pagination, Navigation,Autoplay]}
    slidesPerView={1}
    navigation
    //spaceBetween={50}
    speed={900}
    autoplay={true}
    loop={true}
    
        pagination={{
          clickable: true,
        }}        
        
        className="mySwiper"
      >
        
        <SwiperSlide><img src="/images/adidas_banner.png" alt="adidas_main_banner" /></SwiperSlide>
        <SwiperSlide><img src="/images/adidas_banner_2.png" alt="adidas_main_banner" /></SwiperSlide>
        <SwiperSlide><img src="/images/adidas_banner_3.png" alt="adidas_main_banner" /></SwiperSlide>
        

      </Swiper>
  )
}





export default Banners




