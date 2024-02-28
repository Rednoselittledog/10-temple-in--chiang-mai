import React from "react";
import Image from "next/image";
import GalleryItems from "./GalleryItems";
import relate_stories from "@/relate_stories.json";

let data = relate_stories.data;

const Gallery = (source: any, name: string) => {
  return (
    <div className="page flex flex-col p-10 items-center justify-center py-16 ">
       <hr className="border h-1 bg-gray-600 border-gray-600 my-4 w-full"/>
      <div className="flex flex-col justify-between">
        <p className="md:text-4xl text-2xl font-bold py-8 px-4">
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
