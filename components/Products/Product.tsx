
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import Button from '../Button/Button';
import * as React from 'react'

import ProductBox from '../BoxProducts/ProductsBox.HomePage';


const Product = () => {
  return (
    <>
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <ProductBox textTitle={"محصول شماره یک"}/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductBox textTitle={"محصول شماره یک"}/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductBox textTitle={"محصول شماره یک"}/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductBox textTitle={"محصول شماره یک"}/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductBox textTitle={"محصول شماره یک"}/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductBox textTitle={"محصول شماره یک"}/>
      </SwiperSlide>
    </Swiper>
  </>
);
}

export default Product
