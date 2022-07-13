import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Navigation, EffectFade} from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";

const CarouselScreen = () => {
    return (
        <div className="md:mr-64 cursor-pointer">
            <Swiper modules={
                [Navigation, EffectFade]}
                    navigation
                    effect={"fade"}
                    speed={800}
                    slidesPerView={1}
                    loop
                    className="">
                <SwiperSlide>
                    <Image src={"/images/new1.jpg"} width={2000} height={800} objectFit={"cover"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={"/images/new2.jpg"} width={2000} height={800} objectFit={"cover"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={"/images/new3.jpg"} width={2000} height={800} objectFit={"cover"}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CarouselScreen;
