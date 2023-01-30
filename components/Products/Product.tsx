
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
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
        <ProductBox textTitle={"نرم افزارAPI- ارسال اطلاعات به سامانه مودیان"} src={"./assets/image/product/API.svg"}/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductBox textTitle={" نرم افزار پایانه فروشگاهی"} src={"./assets/image/product/payaneStore.svg"}/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductBox textTitle={"وکیل مالیاتی"} src={"./assets/image/product/Lawyer-pana.svg"}/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductBox textTitle={"طراحی سایت"} src={"./assets/image/product/webdesign.svg"}/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductBox textTitle={"امور ثبت شرکتها"} src={"./assets/image/product/Company-rafiki.svg"}/>
      </SwiperSlide>
      <SwiperSlide>
        <ProductBox textTitle={"کار و تامین اجتماعی"} src={"./assets/image/product/Law firm-pana.svg"}/>
      </SwiperSlide>
    </Swiper>
  </>
);
}

export default Product
