import React, { useRef } from "react";
import Image from "next/image";
import Layer9 from "@/../public/images/Layer9.png";
import portalImage from "@/../public/images/portal-bg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";

const NewsletterForm = () => {
  const swiperRef = useRef<SwiperClass>(null);

  return (
    <div className="flex flex-col justify-between h-full ">
      <div className="flex justify-center">
        <div className="border-r-2 border-cyan-50 pr-3">
          <p className="text-white">NEWSLETTER</p>
          <p className="text-white text-right">خبرنامه</p>
        </div>
        <Image
          src={Layer9}
          width={59}
          height={59}
          className="object-cover ml-3"
          alt="Background"
        />
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        allowTouchMove={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full h-[200px]"
        speed={0}>
        <SwiperSlide>
          <div>
            <p className="text-white">
              جلسه بررسی ارزیابی فصلی با حضور مسئولین و کارشناسان
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full">
            <Image
              src={portalImage}
              width={224}
              height={185}
              className="object-cover ml-3"
              alt="Background"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-between w-full text-white">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="px-4 py-2 rounded">
          قبلی
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="px-4 py-2 rounded">
          بعدی
        </button>
      </div>
    </div>
  );
};
export default NewsletterForm;
