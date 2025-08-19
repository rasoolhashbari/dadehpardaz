import React, { useRef } from "react";
import Image from "next/image";
// image
import Layer9 from "@/../public/images/Layer9.png";
import portalImage from "@/../public/images/portal-bg.png";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
// contents
import {
  dataCollectionEntry,
  quarterlyReviewMeeting,
} from "@/contents/loginContent";

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
        className="w-full h-[300px]"
        speed={0}>
        <SwiperSlide dir="rtl">
          <div className="flex flex-col justify-center items-start h-full px-1 ">
            <p className="text-white text-right font-bold pb-5">
              جمع آوری و ورود اطلاعات
            </p>
            <p className="text-white text-justify border-r-2 pr-5 border-white ">
              {dataCollectionEntry}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-white text-right font-bold px-1 pb-5 pr-3">
              {quarterlyReviewMeeting}
            </p>
            <div className="border-r-2 pr-5 border-white">
              <Image
                src={portalImage}
                width={200}
                height={185}
                className="object-cover ml-3"
                alt="Background"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-between w-full text-white">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="px-4 py-2 rounded cursor-pointer">
          قبلی
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="px-4 py-2 rounded cursor-pointer">
          بعدی
        </button>
      </div>
    </div>
  );
};
export default NewsletterForm;
