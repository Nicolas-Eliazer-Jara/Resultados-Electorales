"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/icons/escudo.png";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // se activa al hacer scroll 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full border-b-4 border-b-[#e7bb60] bg-[#222c4f] transition-all duration-300 ${
        scrolled ? "h-[60px]" : "h-[100px]"
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? "pt-2" : "pt-5"
        }`}
      >
        <Image
          className={`invert transition-all duration-300 ${
            scrolled ? "w-[50px]" : "w-[80px]"
          } pl-5`}
          src={Logo}
          alt="logo"
          height={900}
          width={900}
        />
        <h1
          className={`text-white transition-all duration-300 ${
            scrolled ? "text-sm" : "text-base"
          }`}
        >
          Elecciones Argentina 2023
        </h1>
        <div className="w-[80px] pr-5" />
      </div>
    </div>
  );
}
