'use client'
import { TemplePageProps } from "@/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";

const TemplePage2 = ({
  num,
  name,
  district,
  img,
  description,
  url,
}: TemplePageProps) => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    setIsPortrait(window.matchMedia("(orientation: portrait)").matches)
    console.log('portrait : ' + isPortrait)
  }, [window.matchMedia("(orientation: portrait)")]);

  return (
    <div className={`page flex flex-col items-center ${isPortrait?'bg-red-500':'bg-blue-500'}`} id={name}>
      <div className="h-full px-10 pt-16 flex flex-col items-center">

        <div className="title-container ">
          <p className="running-number ">{num}</p>
          <div className="title-text-container">
            <div className="title-text-main">{name}</div>

            <div className="title-text-sub">{district}</div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-5 lg:gap-10 h-full relative ">
          <div className="image-container col-span-3 lg:pb-0 pb-5">
            <img src={img} alt={name} />
          </div>

          <div className=" col-span-2 flex flex-col md:pb-5 pb-0 relative h-full ">
            <div className="description-box ">
              <p>
                {description}
              </p>
            </div>

            <div className="map h-full md:pb-12 pb-5 ">
              {/* <Link href={url}> */}
                <div className="image-container h-full relative ">
                  {/* <Image
                  src="/Images/map-bg.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Your Image"
                  className="map-img"
                /> */}
                <img
                  src="/Images/map-bg.png"
                  alt="map-bg"
                  className="md:map-img-2 map-img"
                />
                </div>
                
                <div className="map-button text-nowrap">
                  <p className="font-medium text-white m-auto">Open in Google Map</p>
                </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplePage2;
