
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import * as React from 'react'
import ProductCard from "./ProductCard";


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
                className="mySwiper mySwiperProduct p-0"
            >
                {}
                <SwiperSlide>
                    <ProductCard textTitle={"نرم افزارهای استاندارد سازی و ارسال اطلاعات"} src={"/assets/image/product/API.svg"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard textTitle={" نرم افزار پایانه فروشگاهی"} src={"/assets/image/product/payaneStore.svg"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard textTitle={"وکیل مالیاتی"} src={"/assets/image/product/Lawyer-pana.svg"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard textTitle={"طراحی سایت"} src={"/assets/image/product/webdesign.svg"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard textTitle={"امور ثبت شرکتها"} src={"/assets/image/product/Company-rafiki.svg"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <ProductCard textTitle={"کار و تامین اجتماعی"} src={"/assets/image/product/Law firm-pana.svg"}/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Product
