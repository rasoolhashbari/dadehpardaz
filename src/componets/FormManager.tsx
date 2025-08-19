"use client";
import React from "react";
import Image from "next/image";
// image
import bgImage from "@/../public/images/bg.png";
// components
import NewsletterForm from "@/componets/NewsletterForm";
import LoginForm from "@/componets/LoginForm";

const FormManager = () => {
  return (
    <div className="w-[700px] h-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="flex">
        <div className="w-5/12 h-auto relative">
          <Image src={bgImage} fill className="object-cover" alt="Background" />
          <div className="absolute inset-0 bg-[#4bc7d2d9] "></div>
          <div className="z-10 p-5 relative h-full">
            <NewsletterForm />
          </div>
        </div>
        <div className="w-7/12 p-8 flex flex-col items-center justify-start gap-4">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default FormManager;
