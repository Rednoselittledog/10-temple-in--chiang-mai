'use client'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';
import data from "@/data.json";
import Image from 'next/image';
let temple_data = data.data;

const CarouselBG = () => {

  return (
      <Carousel className=''>

        <Carousel.Item className=''> 
          <img src={temple_data[0].img} alt='...' className='carousel-img'/>
          <Carousel.Caption>
            <p className='carousel-title'>{temple_data[0].name}</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className=''> 
        <img src={temple_data[1].img} alt='...' className='carousel-img'/>
        <Carousel.Caption>
            <p className='carousel-title'>{temple_data[1].name}</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className=''> 
        <img src={temple_data[2].img} alt='...' className='carousel-img'/>
        <Carousel.Caption>
            <p className='carousel-title'>{temple_data[2].name}</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className=''> 
        <img src={temple_data[3].img} alt='...' className='carousel-img'/>
        <Carousel.Caption>
            <p className='carousel-title'>{temple_data[3].name}</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className=''> 
        <img src={temple_data[4].img} alt='...' className='carousel-img'/>
        <Carousel.Caption>
            <p className='carousel-title'>{temple_data[4].name}</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className=''> 
        <img src={temple_data[5].img} alt='...' className='carousel-img'/>
        <Carousel.Caption>
            <p className='carousel-title'>{temple_data[5].name}</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className=''> 
        <img src={temple_data[6].img} alt='...' className='carousel-img'/>
        <Carousel.Caption>
            <p className='carousel-title'>{temple_data[6].name}</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className=''> 
        <img src={temple_data[7].img} alt='...' className='carousel-img'/>
        <Carousel.Caption>
            <p className='carousel-title'>{temple_data[7].name}</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className=''> 
        <img src={temple_data[8].img} alt='...' className='carousel-img'/>
        <Carousel.Caption>
            <p className='carousel-title'>{temple_data[8].name}</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className=''> 
        <img src={temple_data[9].img} alt='...' className='carousel-img'/>
        <Carousel.Caption>
            <p className='carousel-title'>{temple_data[9].name}</p>
        </Carousel.Caption>
        </Carousel.Item>
        

    </Carousel>

  )
}

export default CarouselBG