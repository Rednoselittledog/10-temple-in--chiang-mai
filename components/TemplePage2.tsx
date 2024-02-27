import { TemplePageProps } from "@/types";
import Link from "next/link";
import React from "react";

const TemplePage2 = ({
  num,
  name,
  district,
  img,
  description,
  url,
}: TemplePageProps) => {
  return (
    <div className="page flex flex-col items-center px-10 py-10">
      <div className="title-container">
        <p className="running-number ">{num}</p>
        <div className="title-text-container">
          <div className="title-text-main">{name}</div>
          <div className="title-text-sub">{district}</div>
        </div>
      </div>

      <div className=" pt-5 lg:grid lg:grid-cols-5 lg:gap-10">
        <div className="image-container col-span-3 lg:py-0 sm:py-5">
          <img src={img} alt={name} />
        </div>
        <div className=" col-span-2 flex flex-col lg:mt-0 mt-5">
          <div className="description-box ">
            <p>
              {"        "}
              {description}
            </p>
          </div>
    
            <div className="map h-full">
                <Link href={url}>
              <img
                src="/Images/map-bg.png"
                alt="map-bg"
                className="map-img lg:map-img-2"
              />
              <div className="map-button">Open in Google Map</div>
              </Link>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default TemplePage2;
