'use client'
import React from "react";
import {useState, useEffect} from "react";
import Navbar from "./Navbar";
import { IoMenu } from "react-icons/io5";

const Hero = () => {
    const [fix,setFix] = useState(false)
    const [nav, setNav] = useState(false)
    const handleNav= () => {
        setNav(!nav)
      }
    useEffect(() =>{
        const handleScroll = ()=>{
          console.log("a : "+window.scrollY)
            if(window.scrollY>742) {
                setFix(true)
            }
            else{
                setFix(false)
            }
        } 
        window.addEventListener('scroll',handleScroll);
      },);

  return (
    <div className="page flex flex-col relative">
        <div className={fix?'w-full h-20 shadow-xl z-[100] fixed top-0 left-0 bg-white':'w-full h-20  z-[100] fixed top-0 left-0 bg-transparent'} >
          <div className='flex justify-end items-center w-full h-full px-10 2xl:px-16'>
            <div onClick={handleNav}>
                <IoMenu color={fix?'black':'white'} size={25}/>
            </div>
          </div>
        </div>
      <div className="w-full overflow-clip">
        <img
          src="/Images/hero.png"
          alt="10 must-see temples in chaing mai"
          className="lg:h-screen w-full object-fit"
        />
      </div>
    </div>
  );
};

export default Hero;
