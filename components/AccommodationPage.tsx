'use client'
import { AccommodationPageProps, TemplePageProps } from "@/types";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
// import LinkPreview from '@ashwamegh/react-link-preview'
// import Microlink from "@microlink/react";


const AccommodationPage = ({
  num,
  name,
  temple_name,
  district,
  img,
  description,
  url,
}: AccommodationPageProps) => {
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

              <div className="title-text-sub">(near by {temple_name})</div>
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

              <div className="h-full rounded-xl shadow-lg shadow-gray-500 bg-sub-color p-3">
                <Link href={url} style={{ textDecoration: 'none'}}>
                    <div className="h-full grid grid-rows-3 relative">
                        <div className="row-span-2 relative object-cover ">
                            <Image src={img} alt={name} fill/>
                        </div>
                        <div className=" row-span-1 relative mt-3 object-cover">
                            <p className="text-3xl text-black underline-none font-bold">View in Agoda</p>
                            <p className="text-black text-sm">{url}</p>
                        </div>
                    </div>
                </Link>
              </div>

            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default AccommodationPage;
