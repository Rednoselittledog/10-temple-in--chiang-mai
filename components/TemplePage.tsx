import { TemplePageProps } from '@/types'
import React from 'react'
import Image from 'next/image'


const TemplePage = ({num, name, district, img, description} : TemplePageProps) => {
    const space = '      ';
  return (

    <div className='page flex flex-col items-center px-10 py-16'>
            <div className='title-container'>
                <p className='running-number'>{num}</p>
                <div className='title-text-container'>
                    <div className='title-text-main'>
                        {name}
                    </div>
                    <div className='title-text-sub'>
                        {district}
                    </div>
                </div>
            </div>
            <div className='image-container py-5'>
                <img src={img} alt={name} />

            </div>
            <div className='description-box'>
                <p>{'        '}{description}</p>
            </div>
            <div className='map'>
                <img src="/Images/map-bg.png" alt="map-bg" className='map-img'/>
                <div className='map-button'>
                    Map
                </div>
            </div>


        {/* <div className='grid grid-rows-10 gap-8 w-screen'>
            <div className=' row-span-2 flex flex-row px-14 py-7'>
                
                <p className='text-8xl font-bold text-blue-500'>{num}</p>
                <div className='flex flex-col px-4 py-2'>
                    <p className='text-5xl font-bold '>{name}</p>
                    <p className='text-3xl text-gray-500'>{district}</p>                 
                </div>
            </div>
            <div className='row-span-4 w-screen'>
                <Image src = {img} alt = {name} width={700} height={700} className='m-auto display:block'/>
            </div>      
            <div className='row-span-2'>
                <p className='text-lg py-8 px-14 pr-20 '>
                    {description}
                </p>
            </div>
            <div className=' row-span-2'>
                aaall
            </div>
        </div> */}
    </div>
  )
}

export default TemplePage