import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
export default function Carousel({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="relative p-0">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 rounded-3xl max-h-[394px] md:max-h-[664px]"
      >
        {images.map((image) => (
          <SwiperSlide>
            <img src={image} alt="tractor" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={10}
        slidesPerView={"auto"}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="!p-2 md:!pb-10 md:!px-10 mySwiper !relative md:!absolute md:!bottom-0 md:!left-0 !z-10"
      >
        {images.map((image) => (
          <SwiperSlide>
            <img src={image} alt="tractor" className="cursor-pointer" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
