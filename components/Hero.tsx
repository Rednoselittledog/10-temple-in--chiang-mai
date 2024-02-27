"use client";
import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { IoMenu } from "react-icons/io5";
import data from "@/data.json";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
let temple_data = data.data;

const Hero = () => {
  const objectRef = useRef(null);
  const overlayRef = useRef(null);
  const [fix, setFix] = useState(false);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log(nav)
  };
  // useEffect(() =>{
  //     const handleScroll = ()=>{
  //       console.log("a : "+window.scrollY)
  //         if(window.scrollY>742) {
  //             setFix(true)
  //         }
  //         else{
  //             setFix(false)
  //         }
  //     }
  //     window.addEventListener('scroll',handleScroll);
  //   },);

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

    // return () => window.removeEventListener('resize', checkOverlappingRectangles);
  }, [objectRef.current, overlayRef.current]);

  return (
    <div className="page flex flex-col relative">
      <div
        className={
          !fix
            ? "w-full h-14 md:h-18 shadow-xl z-[100] fixed top-0 left-0 bg-white"
            : "w-full z-[100] fixed top-0 h-14 md:h-18 left-0 bg-transparent"
        }
        ref={objectRef}
      >
        <div className="flex flex-row justify-between items-center w-full h-full px-10 2xl:px-16">
            
               {temple_data.map((item: any, index: any) => {
                return (
                    <li key={index} className="xl:flex xl:flex-row hidden">
                        <Link href={`/#${item.name}`} className={`text-${!fix ? "black" : "white"} 
                         font-medium`}>{item.name}</Link>
                        <p className={!fix ? "px-1 text-blue-500 font-bold" : "px-1 text-balck font-bold"}>{index<9?"|":""}</p>
                        {/* <p className="px-1">{index}</p> */}
                    </li>
              );
            })} 
            
            <div onClick={handleNav} className="xl:hidden w-full flex justify-end">
                
            <IoMenu
              color={!fix ? "black" : "white"}
              size={25}
            />
          </div>
        </div>
      </div>

      <div className=" w-full overflow-clip" ref={overlayRef}>
        <img
          src="/Images/hero.png"
          alt="10 must-see temples in chaing mai"
          className="lg:h-screen w-full object-fit"
        />
      </div>
      <div
        className={
          nav
            ? " xl:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-300 z-[200]"
            : ""
        }
      >
        <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[45%] h-screen bg-white p-5 ease-in duration-300" : "fixed left-[-100%] top-0 w-[75%] sm:w-[45%] h-screen bg-white p-5 ease-in duration-300"}>
        <div className="flex flex-col w-full items-start justify-between">
            <div onClick={handleNav} className="xl:hidden w-full flex justify-end pb-3">
                <AiOutlineClose
                  color={"black"}
                  size={25}
                />
            </div>
            {temple_data.map((item: any, index: any) => {
                return (
                    <li key={index} className="py-2 border-b-2  w-full"onClick={handleNav}>
                        <Link href={`/#${item.name}`} className="text-blackfont-semibold"
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
