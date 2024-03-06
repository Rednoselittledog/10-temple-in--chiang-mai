"use client"
import Link from 'next/link'
import React from 'react'
import { useState, useEffect} from "react";
import { NavbarProps } from '@/types';


const Navbar = ({transparent}:NavbarProps) => {
  return (
        <div className="flex flex-row justify-center items-center w-full h-full px-10 2xl:px-16">
            <div  className=" w-full flex justify-between items-center px-10">
            <Link href={'/'}  style={{ textDecoration: 'none' }}>
              <p className={`text-xl my-auto text-title ${!transparent?'text-main-color':'text-sub-color'}`}>Temples</p>
            </Link>
            <Link href={'/Transporation'}  style={{ textDecoration: 'none' }}>
              <p className={`text-xl my-auto text-title ${!transparent?'text-main-color':'text-sub-color'}`}>Transporation</p>
            </Link>
            <Link href={'/#home'}  style={{ textDecoration: 'none' }}>
              <p className={`text-xl my-auto text-title ${!transparent?'text-main-color':'text-sub-color'}`}>Activities</p>
            </Link>
            <Link href={'/#home'}  style={{ textDecoration: 'none' }}>
              <p className={`text-xl my-auto text-title ${!transparent?'text-main-color':'text-sub-color'}`}>Accommodations</p>
            </Link>
            <Link href={'/#home'}  style={{ textDecoration: 'none' }}>
              <p className={`text-xl my-auto text-title ${!transparent?'text-main-color':'text-sub-color'}`}>About us</p>
            </Link>
          </div>
        </div>
  )
}

export default Navbar