"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import data from "@/data.json";
import Link from "next/link";
let temple_data = data.data;
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CarouselBG } from ".";

const Hero = () => {
  const objectRef = useRef(null);
  const overlayRef = useRef(null);
  const [fix, setFix] = useState(false);
  const [nav, setNav] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log(nav)
  };
  
  useEffect(() => {
    const checkOverlappingRectangles = () => {
      if (objectRef.current && overlayRef.current) {
        const objectRect = (
          objectRef.current as HTMLElement
        ).getBoundingClientRect();
        const overlayRect = (
          overlayRef.current as HTMLElement
        ).getBoundingClientRect();

        setFix(
          objectRect.top < overlayRect.bottom &&
            objectRect.right > overlayRect.left &&
            objectRect.bottom > overlayRect.top &&
            objectRect.left < overlayRect.right
        );
      }
    };

    // Initial check and re-check on window resize for accuracy
    checkOverlappingRectangles();
    window.addEventListener("scroll", checkOverlappingRectangles);

    const mediaQuery = window.matchMedia("(orientation: portrait)");
    setIsPortrait(mediaQuery.matches);

    const handleOrientationChange = (event:any) => {
      setIsPortrait(event.matches);
    };

    mediaQuery.addEventListener("change", handleOrientationChange);
    // return () => window.removeEventListener('resize', checkOverlappingRectangles);
  }, [objectRef.current, overlayRef.current]);



  return (
    <div className={` flex flex-col relative ${!isPortrait?'page':'page-2'}`} id = 'home'>
      {/* navbar */}
      <div
        className={
          !fix
            ? "w-screen h-14 md:h-18 shadow-xl z-[100] fixed top-0 left-0 bg-main-color"
            : "w-screen z-[100] fixed top-0 h-14 md:h-18 left-0 bg-transparent"
        }
        ref={objectRef}
      >
        <div className="flex flex-row justify-center items-center w-full h-full px-10 2xl:px-16">
            <div  className=" w-full flex justify-between items-center">
            <Link href={'/#home'}  style={{ textDecoration: 'none' }}>
              <p className={`text-xl my-auto ${!fix?'text-main-color':'text-sub-color'}`}>10 hit Temples in Chiang Mai</p>
            </Link>
            <div onClick={handleNav}>
            <IoMenu
              color={!fix?'white':'black'}
              size={25}
              />
              </div>
          </div>
        </div>
      </div>

      {/* bg */}
      {/* <div className=" w-full overflow-clip" ref={overlayRef}>
        <img
          src="/Images/hero.png"
          alt="10 must-see temples in chaing mai"
          className="lg:h-screen w-full object-fit"
        />
      </div> */}

      <div ref={overlayRef}>
        <CarouselBG />
      </div>

      {/* sliding navbar */}
      <div
        className={
          nav
            ? "  fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300 z-[200]"
            : ""
        }
      >
        <div className={nav ? " fixed left-0 top-0 w-[75%] sm:w-[45%] h-screen bg-white p-5 ease-in duration-300 overflow-scroll" : " fixed left-[-100%] top-0 w-[75%] sm:w-[45%] h-screen bg-white p-5 ease-in duration-300"}>
        <div className="flex flex-col w-full items-start justify-between ">
            <div onClick={handleNav} className=" w-full flex justify-end pb-3">
                <AiOutlineClose
                  color={"black"}
                  size={25}
                />
            </div>
            {temple_data.map((item: any, index: any) => {
                return (
                    <li key={index} className="py-2 border-b-2 border-b-blue-500 w-full"onClick={handleNav} >
                        <Link href={`/#${item.name}` } className="text-black font-semibold"  style={{ textDecoration: 'none' }}
                        >{item.name}</Link>
                    </li>
              );
            })} 
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
