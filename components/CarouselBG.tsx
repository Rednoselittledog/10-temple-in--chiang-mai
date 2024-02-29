'use client'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';
import data from "@/data.json";
import Image from 'next/image';
import Link from 'next/link';
let temple_data = data.data;

const CarouselBG = () => {

  return (
      <Carousel className=''>

        <Carousel.Item className='' interval={1500}> 
          <img src={'/Images/hero3.png'} alt='...' className='carousel-img'/>
          <Carousel.Caption>
            {/* <p className='carousel-title'>{temple_data[0].name}</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='' interval={1500}> 
        <Link href={`/#${temple_data[0].name}`}>
          <img src={temple_data[0].carousel_img} alt='...' className='carousel-img'/>
        </Link>
          <Carousel.Caption>
            {/* <p className='carousel-title'>{temple_data[0].name}</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='' interval={1500}> 
        <Link href={`/#${temple_data[1].name}`}>
        <img src={temple_data[1].carousel_img} alt='...' className='carousel-img'/>
        </Link>
        <Carousel.Caption>
            {/* <p className='carousel-title'>{temple_data[1].name}</p> */}
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='' interval={1500}> 
        <Link href={`/#${temple_data[2].name}`}>
        <img src={temple_data[2].carousel_img} alt='...' className='carousel-img'/>
        </Link>
        <Carousel.Caption>
            {/* <p className='carousel-title'>{temple_data[2].name}</p> */}
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='' interval={1500}> 
        <Link href={`/#${temple_data[3].name}`}>
        <img src={temple_data[3].carousel_img} alt='...' className='carousel-img'/>
        </Link>
        <Carousel.Caption>
            {/* <p className='carousel-title'>{temple_data[3].name}</p> */}
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='' interval={1500}> 
        <Link href={`/#${temple_data[4].name}`}>
        <img src={temple_data[4].carousel_img} alt='...' className='carousel-img'/>
        </Link>
        <Carousel.Caption>
            {/* <p className='carousel-title'>{temple_data[4].name}</p> */}
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='' interval={1500}> 
        <Link href={`/#${temple_data[5].name}`}>
        <img src={temple_data[5].carousel_img} alt='...' className='carousel-img'/>
        </Link>
        <Carousel.Caption>
            {/* <p className='carousel-title'>{temple_data[5].name}</p> */}
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='' interval={1500}> 
        <Link href={`/#${temple_data[6].name}`}>
        <img src={temple_data[6].carousel_img} alt='...' className='carousel-img'/>
        </Link>
        <Carousel.Caption>
            {/* <p className='carousel-title'>{temple_data[6].name}</p> */}
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='' interval={1500}> 
        <Link href={`/#${temple_data[7].name}`}>
        <img src={temple_data[7].carousel_img} alt='...' className='carousel-img'/>
        </Link>
        <Carousel.Caption>
            {/* <p className='carousel-title'>{temple_data[7].name}</p> */}
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='' interval={1500}> 
        <Link href={`/#${temple_data[8].name}`}>
        <img src={temple_data[8].carousel_img} alt='...' className='carousel-img'/>
        </Link>
        <Carousel.Caption>
            {/* <p className='carousel-title'>{temple_data[8].name}</p> */}
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='' interval={1500}> 
        <Link href={`/#${temple_data[9].name}`}>
        <img src={temple_data[9].carousel_img} alt='...' className='carousel-img'/> 
        </Link>
        <Carousel.Caption>
            {/* <p className='carousel-title'>{temple_data[9].name}</p> */}
        </Carousel.Caption>
        </Carousel.Item>
        

    </Carousel>

  )
}

export default CarouselBG