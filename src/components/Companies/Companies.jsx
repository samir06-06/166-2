import React from 'react';
import './Companies.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; 
import { Mousewheel } from 'swiper/modules';
import patirti from "../../assets/companies/patirti.png";
import trendyol from "../../assets/companies/trendyol.png";
import camper from "../../assets/companies/camper.png";
import karaca from "../../assets/companies/karaca.png";
import morhipo from "../../assets/companies/morhipo.png";
import markafoni from "../../assets/companies/markafoni.png";

const Companies = () => {
  return (
    <Swiper
      slidesPerView={6.5}
      spaceBetween={120}
      mousewheel={true}
      loop={true} 
      modules={[Mousewheel]}
      centeredSlides={false}
      style={{ paddingBottom: '20px', marginBottom:'120px'}}
    >
      <SwiperSlide>
        <div className='company'><img src={patirti} alt="patirti" /></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='company'><img src={trendyol} alt="trendyol" /></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='company'><img src={camper} alt="camper" /></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='company'><img src={karaca} alt="karaca" /></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='company'><img src={morhipo} alt="morhipo" /></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='company'><img src={markafoni} alt="markafoni" /></div>
      </SwiperSlide> 
      <SwiperSlide>
        <div className='company'><img src={camper} alt="camper" /></div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Companies;
