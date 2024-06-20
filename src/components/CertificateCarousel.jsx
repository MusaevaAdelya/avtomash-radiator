import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

function CertificateCarousel({ data }) {
  return (
    <div className="py-16">
      <h5 className="mb-3 text-2xl text-center">{data.title}</h5>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="border mySwiper3"
      >
        {data.images.map((image) => (
          <SwiperSlide>
            <img
              className="h-screen"
              src={image}
              alt={`certificate ${data.title}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CertificateCarousel;
