import React from 'react'
import { TemplePageProps } from '@/types'

const TemplePage3 = ({num, name, district, img, description} : TemplePageProps) => {
  return (
    <div className='page  p-5 md:p-10'>
        <div className='h-full flex flex-col items-center shadow-xl shadow-slate-500 p-5 rounded-xl'>
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
            
    </div>
  )
}

export default TemplePage3