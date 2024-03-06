"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselBG, NavbarStatic } from ".";

const Hero2 = () => {
  const [isPortrait, setIsPortrait] = useState(false);
  const [transparent, setTransparent] = useState(true);


  useEffect(() => {
     const mediaQuery = window.matchMedia("(orientation: portrait)");
    setIsPortrait(mediaQuery.matches);
    const handleOrientationChange = (event: any) => {
      setIsPortrait(event.matches);
    };
    mediaQuery.addEventListener("change", handleOrientationChange);
    console.log(isPortrait);
},[]);

  return (
    <div
      className={` flex flex-col relative ${!isPortrait ? "page" : "page-2"}`}
      id="home"
    >
      <div
        className={"w-screen h-14 md:h-18 shadow-xl z-[100] fixed top-0 left-0 bg-main-color md:overflow-x-scroll lg:overflow-hidden"}
      >
        <NavbarStatic state={1}/>
      </div>
      <div className="pt-10">
        <CarouselBG />
      </div>
    </div>
  );
};

export default Hero2;
