'use client'
import { TemplePageProps } from "@/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const TemplePageMain = ({
  num,
  name,
  district,
  img,
  description,
  url,
}: TemplePageProps) => {
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
    <div className={`flex flex-col items-center overflow-hidden${!isPortrait?'page':'page-2'} bg-main-color`} id={name}>
      <div className="object-cover px-10 pt-24 flex flex-col items-center">
        <div className="object-cover p-3 flex flex-col items-center rounded-xl shadow-lg shadow-gray-500 bg-sub-color">
          
          
          <div className="title-container ">
            <p className="running-number ">{num}</p>
            <div className="title-text-container">
              <div className="title-text-main">{name}</div>

              <div className="title-text-sub">{district}</div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-5 lg:gap-10 object-cover relative pt-2">
            <div className="image-container col-span-3 overflow-hidden">
              <img src={img} alt={name} />
            </div>

            <div className=" col-span-2 flex flex-col md:pb-5 pb-0 relative h-full ">
              <div className={`description-box ${isPortrait?"pt-2":""}`}>
                <p>
                  {description}
                </p>
              </div>

              <div className="map h-full ">
                <iframe
                src={url}
                width="100%"
                height="100%"
                loading="lazy"
                className="shadow-sm shadow-gray-500"
                />
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default TemplePageMain;

