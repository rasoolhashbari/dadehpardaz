"use client";
import Image from "next/image";
import Layer20 from "@/../public/images/Layer20.png";
// components
import FormManager from "@/componets/FormManager";
// mui
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
export default function Home() {
  const theme = createTheme({
    direction: "rtl",
    palette: {
      mode: "light",
    },
  });

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className="bg-oceanblue  h-screen grid place-items-center">
          <div>
            <FormManager />
            <div className="flex justify-between pt-5">
              <p className="text-white text-xs">
                Copyright c 2019 All Rights Reserved
              </p>
              <p className="text-white text-xs">
                طراحی و پشتیبانی توسط : داده پرداز
              </p>
            </div>
          </div>

          <div className="absolute left-0 flex flex-col self-end ">
            <Image
              src={Layer20}
              width={350}
              height={500}
              className="object-cover"
              alt="Background1"
            />
          </div>
          <div className="absolute bottom-5 w-full flex flex-col gap-5 justify-between items-center ">
            <div className="h-1 bg-[#71c8d5] w-full"></div>
            <div className="h-1 bg-[#71c8d5] w-full"></div>
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
