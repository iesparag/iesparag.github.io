import { Box, Heading, Image, } from '@chakra-ui/react'
import React from 'react'
import Ncc from "../assets/N.C.C_certificate .jpg"
import Goi from "../assets/GOI.jpg"
import Headquarter from "../assets/Headquarters_Certificate.jpg"
import masai from "../assets/masai_award.jpg"
import figma from "../assets/figma.png";
import bootstrap from "../assets/bootstrap.png"
import "./Achievements.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {  Pagination } from 'swiper/modules';


const Achievements = () => {
  
  return (
    // effect={'coverflow'}
    // grabCursor={true}
    // centeredSlides={true}
    // slidesPerView={5}
    // slidesPerGroup={1}
    // coverflowEffect={{
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 4,
    //   slideShadows: true,
    // }}
    // pagination={true}
    // modules={[Pagination]}
    // className="mySwiper"

    <Swiper 
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    modules={[Pagination]}
  >
    {/* <SwiperSlide className='SwiperSlide'>
      <img src={figma} />
    </SwiperSlide> */}
    <SwiperSlide>
      <img src={bootstrap} className='SwiperSlide' />
    </SwiperSlide>
    <SwiperSlide>
      <img src={masai} className='SwiperSlide'/>
    </SwiperSlide>
    <SwiperSlide>
      <img src={Ncc} className='SwiperSlide'/>
    </SwiperSlide>
    <SwiperSlide>
      <img src={Headquarter} className='SwiperSlide'/>
    </SwiperSlide>
    <SwiperSlide>
      <img src={Goi} className='SwiperSlide' />
    </SwiperSlide>
  </Swiper>
  )
}

export default Achievements