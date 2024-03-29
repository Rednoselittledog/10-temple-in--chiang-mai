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
            <div className='description-box '>
                <p>{'        '}{description}</p>
            </div>
            <div className='map'>
                <img src="/Images/map-bg.png" alt="map-bg" className='map-img'/>
                <div className='map-button'>
                    Map
                </div>
            </div>
    </div>
  )
}

export default TemplePage