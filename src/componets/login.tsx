"use client";
import React, { useState } from "react";
import Image from "next/image";
import logoImage from "@/../public/images/logo.png";
import bgImage from "@/../public/images/bg.png";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // اینجا می‌تونید لاجیک لاگین رو اضافه کنید
    console.log("Email:", email, "Password:", password);
  };
  return (
    <div className="w-[700px] h-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="flex">
        <div className="w-5/12 relative">
          <Image src={bgImage} fill className="object-cover" alt="Background" />
          <div className="absolute inset-0 bg-[#4bc7d2d9]"></div>
        </div>
        <div className="w-7/12 p-8 flex flex-col items-center justify-start gap-4 ">
          <div className="relative w-full h-12">
            <Image src={logoImage} fill alt="Logo" />
          </div>
          <div className="bg-[#f0efef] w-full text-center p-2 rounded-4xl">
            <p>سامانه جامع داده پرداز</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl w-full">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">ایمیل</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@mail.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">رمز عبور</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="رمز عبور خود را وارد کنید"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff7f26] font-bold text-white py-2 rounded-md cursor-pointer hover:bg-[#f69551]">
              ورود
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
