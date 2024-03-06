"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselBG } from ".";
import Navbar from "./Navbar";

const Hero3 = () => {
  const [isPortrait, setIsPortrait] = useState(false);
  const [transparent, setTransparent] = useState(true);
  const objectRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const checkOverlappingRectangles = () => {
      if (objectRef.current && overlayRef.current) {
        const objectRect = (
          objectRef.current as HTMLElement
        ).getBoundingClientRect();
        const overlayRect = (
          overlayRef.current as HTMLElement
        ).getBoundingClientRect();

        setTransparent(
          objectRect.top < overlayRect.bottom &&
            objectRect.right > overlayRect.left &&
            objectRect.bottom > overlayRect.top &&
            objectRect.left < overlayRect.right
        );
        console.log(transparent);
      }
    };
    // Initial check and re-check on window resize for accuracy
    checkOverlappingRectangles();
    window.addEventListener("scroll", checkOverlappingRectangles);

    const mediaQuery = window.matchMedia("(orientation: portrait)");
    setIsPortrait(mediaQuery.matches);
    const handleOrientationChange = (event: any) => {
      setIsPortrait(event.matches);
    };
    mediaQuery.addEventListener("change", handleOrientationChange);
// [objectRef.current, overlayRef.current]
}, [objectRef.current, overlayRef.current]);

  return (
    <div
      className={` flex flex-col relative ${!isPortrait ? "page" : "page-2"}`}
      id="home"
    >
      <div
        className={
          !transparent
            ? "w-screen h-14 md:h-18 shadow-xl z-[100] fixed top-0 left-0 bg-main-color"
            : "w-screen z-[100] fixed top-0 h-14 md:h-18 left-0 bg-transparent"
        }
        ref={objectRef}
      >
        <Navbar transparent = {transparent}/>
      </div>
      <div className="pt-10" ref={overlayRef}>
        <CarouselBG />
      </div>
    </div>
  );
};

export default Hero3;
