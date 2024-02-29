'use client'
import React from "react";
import Image from "next/image";
import GalleryItems from "./GalleryItems";
import relate_stories from "@/relate_stories.json";
import { useState, useEffect } from "react";

let data = relate_stories.data;

const Gallery = (source: any, name: string) => {

  const [isPortrait, setIsPortrait] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)");
    setIsPortrait(mediaQuery.matches);

    const handleOrientationChange = (event:any) => {
      setIsPortrait(event.matches);
    };

    mediaQuery.addEventListener("change", handleOrientationChange);

    // Clean up the event listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, [isPortrait]);


  return (
    <div className={`flex flex-col p-10 items-center justify-center py-16 bg-main-color ${!isPortrait?'page':'page-2'}`} >
       <hr className="border h-1 bg-gray-600 border-gray-600 my-4 w-full"/>
      <div className="flex flex-col justify-between">
        <p className="md:text-4xl text-2xl font-bold pt-8 pb-4 px-4 text-main-color text-title">
        Other tourist attractions in Chiang Mai
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 p-4">
          {data.map((item: any, index:any) => {
            return (
              <li key={index}>
                <GalleryItems num={item.num} img={item.img} name={item.name} url={item.url} />
              </li>
            );
          })}
          
        </div>

      </div>
      <hr className="border h-1 bg-gray-600 border-gray-600 my-4 w-full"/>
    </div>
  );
};

export default Gallery;
