import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
// import "swiper/swiper-bundle.min.css";
import "./Customer_reviews.scss";
import Review from "../Review/Review"

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Customer_reviews() {
    return (
        <div className="customer_reviews">
            <div className="reviews-heading">
                <div className="reviews-heading-left">
                    <h1>Müştəri rəyləri</h1>
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur. Magna <br /> Tellus Nibh Lectus Congue Amet.</p>
                </div>
                <div className="reviews-heading-right">
                    <h5>Total Reviews</h5>
                    <h2>122K</h2>
                </div>
            </div>
            <main className="slider-main-container">
                <Swiper
                    spaceBetween={75}
                    slidesPerView={3}
                    navigation={{
                        nextEl: ".custom-next-button",
                        prevEl: ".custom-prev-button",
                    }}
                  
                    pagination={{ clickable: true, dynamicBullets: true }}
                >
                    <SwiperSlide><Review/></SwiperSlide>
                    <SwiperSlide><Review/></SwiperSlide>
                    <SwiperSlide><Review/></SwiperSlide>
                    <SwiperSlide><Review/></SwiperSlide>
                    <SwiperSlide><Review/></SwiperSlide>
                    <SwiperSlide><Review/></SwiperSlide>
                    <SwiperSlide><Review/></SwiperSlide>
                </Swiper>
                <div className="nav-btn custom-prev-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <line x1="19" x2="5" y1="12" y2="12" />
                        <polyline points="12 19 5 12 12 5" />
                    </svg>
                </div>

                <div className="nav-btn custom-next-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <line x1="5" x2="19" y1="12" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </div>
            </main>
        </div>
    );
}

export default Customer_reviews;
