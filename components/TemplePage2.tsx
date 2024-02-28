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
    <div className="page  flex flex-col items-center" id={name}>
      <div className=" px-10 py-2 xl:py-10 flex flex-col items-center">
        <div className="title-container md:pt-12 ">
          <p className="running-number ">{num}</p>
          <div className="title-text-container">
            <div className="title-text-main">{name}</div>

            <div className="title-text-sub">{district}</div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-5 lg:gap-10 h-full ">
          <div className="image-container col-span-3 ">
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
                <div className="map-button text-nowrap">
                  <p className="font-medium text-white m-auto">Open in Google Map</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplePage2;
