'use client'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';

const page = () => {

  return (
    <div className=''>
      <Carousel className=''>

        <Carousel.Item className=''> 
          <img src='/Images/temp1.webp' alt='...' className='h-screen w-full object-cover'/>
          <Carousel.Caption>
            <h1 className='pb-10 text-5xl'>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src="/Images/temp2.webp" alt="..." className='h-screen w-full object-cover'/>
          <Carousel.Caption>
            <h1>Second slide label</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src="/Images/temp3.webp" alt="..." className='h-screen w-full object-cover'/>
          <Carousel.Caption>
            <h1>Third slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

    </Carousel>
    </div>
  )
}

export default page