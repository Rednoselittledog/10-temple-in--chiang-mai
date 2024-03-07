import { NavbarStaticProps } from "@/types";
import Link from "next/link";
import React from "react";

const NavbarStatic = ({ state }: NavbarStaticProps) => {
    return (
        // px-10 2xl:px-16
        <div className="flex flex-row justify-center items-center w-full h-full ">
            <div  className="w-full h-full lg:grid lg:grid-cols-5 justify-between items-center flex flex-row">
            <Link href={'/'}  style={{ textDecoration: 'none' }} className={`lg:px-0 px-3 w-full h-full flex justify-center ${state==1?'nav-focus' : 'nav-normal'}`}>
              <p className={`text-sm md:text-xl my-auto text-title `}>Temples</p>
            </Link>
            <Link href={'/Transportation'}  style={{ textDecoration: 'none' }}  className={`lg:px-0 px-3 w-full h-full flex justify-center ${state==2?'nav-focus' : 'nav-normal'}`}>
              <p className={`text-sm md:text-xl my-auto text-title `}>Transportation</p>
            </Link>
            <Link href={'/Activities'}  style={{ textDecoration: 'none' }}  className={`lg:px-0 px-3 w-full h-full flex justify-center ${state==3?'nav-focus' : 'nav-normal'}`}>
              <p className={`text-sm md:text-xl my-auto text-title `}>Activities</p>
            </Link>
            <Link href={'/Accommodations'}  style={{ textDecoration: 'none' }}  className={`lg:px-0 px-3 w-full h-full flex justify-center ${state==4?'nav-focus' : 'nav-normal'}`}>
              <p className={`text-sm md:text-xl my-auto text-title `}>Accommodations</p>
            </Link>
            <Link href={'/About_us'}  style={{ textDecoration: 'none' }}  className={`lg:px-0 px-3 w-full h-full flex justify-center ${state==5?'nav-focus' : 'nav-normal'}`}>
              <p className={`text-nowrap text-sm md:text-xl my-auto text-title `}>About us</p>
            </Link>
          </div>
        </div>
  )
};

export default NavbarStatic;
