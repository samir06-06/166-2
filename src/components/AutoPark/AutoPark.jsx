import React from 'react';
import './AutoPark.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; 
import { Mousewheel } from 'swiper/modules';
import truck2 from "../../assets/truck2.png" 

const AutoPark = () => {
  return (
    <div className='auto-park'>
     <h1>Bizim avtopark</h1>
    <Swiper
      slidesPerView={4.5}
      spaceBetween={120}
      mousewheel={true}
      loop={true} 
      modules={[Mousewheel]}
      centeredSlides={false}
      style={{ paddingBottom: '20px' }}
    >
     
      <SwiperSlide>
        <div className='truck-card'>
            <span>Soyuduculu</span>
            <h6>5.1 metr / 5 ton</h6>
            <img src={truck2} alt="truck" />
            </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='truck-card'>
            <span>Soyuduculu</span>
            <h6>5.1 metr / 5 ton</h6>
            <img src={truck2} alt="truck" />
            </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='truck-card'>
            <span>Soyuduculu</span>
            <h6>5.1 metr / 5 ton</h6>
            <img src={truck2} alt="truck" />
            </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='truck-card'>
            <span>Soyuduculu</span>
            <h6>5.1 metr / 5 ton</h6>
            <img src={truck2} alt="truck" />
            </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='truck-card'>
            <span>Soyuduculu</span>
            <h6>5.1 metr / 5 ton</h6>
            <img src={truck2} alt="truck" />
            </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='truck-card'>
            <span>Soyuduculu</span>
            <h6>5.1 metr / 5 ton</h6>
            <img src={truck2} alt="truck" />
            </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='truck-card'>
            <span>Soyuduculu</span>
            <h6>5.1 metr / 5 ton</h6>
            <img src={truck2} alt="truck" />
            </div>
      </SwiperSlide>
      
    </Swiper>
    </div>
  );
}

export default AutoPark;
