"use client";
import React, { useState } from "react";
import Image from "next/image";
import logoImage from "@/../public/images/logo.png";
import bgImage from "@/../public/images/bg.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

const LoginComponent = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};
    if (!formData.password) newErrors.password = "این فیلد را پر کنید";
    setErrors(newErrors);
  };

  return (
    <div className="w-[700px] h-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="flex">
        <div className="w-5/12 relative">
          <Image src={bgImage} fill className="object-cover" alt="Background" />
          <div className="absolute inset-0 bg-[#4bc7d2d9]"></div>
        </div>
        <div className="w-7/12 p-8 flex flex-col items-center justify-start gap-4">
          <div className="relative w-full">
            <Image src={logoImage} width={501} height={99} alt="Logo" />
          </div>
          <div className="bg-[#f0efef] w-full text-center p-2 rounded-4xl">
            <p>سامانه جامع داده پرداز</p>
          </div>

          <form
            dir="rtl"
            onSubmit={handleSubmit}
            className="bg-white rounded-xl w-full">
            <div className="mb-4">
              <TextField
                label="پست الکترونیک"
                size="small"
                color="info"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-right"
                placeholder="info@test.com"
                error={!!errors.email}
                helperText={errors.email}
              />
            </div>
            <div className="mb-6">
              <TextField
                label="رمز عبور"
                type="password"
                size="small"
                color="info"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full text-right"
                error={!!errors.password}
                helperText={errors.password}
              />
            </div>
            <div className="flex items-center">
              <Checkbox size="small" {...label} defaultChecked />
              <p>مرا به خاطر داشته باش</p>
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
