'use client'
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import relate_stories from '@/relate_stories.json';
let data = relate_stories.data


const page = ({ params }: { params: { num: string } }) => {
    let index : number = Number(params.num)
    let item = data[index-1]
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
        
    <div className={`flex flex-col items-center w-screen h-full bg-main-color`} id={item.name}>
    <div className="h-full px-10 py-12 flex flex-col items-center">
      <div className="h-full p-3 flex flex-col items-center rounded-xl shadow-lg shadow-gray-500 bg-sub-color">
        
        
        <div className="title-container ">
          <p className="running-number ">{item.num}</p>
          <div className="title-text-container">
            <div className="md:text-7xl text-xl font-bold text-title">{item.name}</div>

          </div>
        </div>

        <div className="lg:grid lg:grid-cols-5 lg:gap-10 h-full relative ">
          <div className="image-container col-span-3 ">
            <img src={item.img} alt={item.name} />
          </div>

          <div className=" col-span-2 flex flex-col md: pb-0 relative h-full ">
            <div className={`description-box pb-3 ${isPortrait?"pt-2":""}`}>
              <p>
                {item.description}
              </p>
            </div>

            <div className="map h-full">
              <Link href={item.url}>
                <div className="image-container h-full relative ">
                <img
                  src="/Images/map-bg.png"
                  alt="map-bg"
                  className={`md:map-img-2 map-img`}
                />
                </div>
                
                <div className="map-button text-nowrap">
                  <p className="font-medium text-white m-auto">Open in Google Map</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </div>
  )
}

export default page