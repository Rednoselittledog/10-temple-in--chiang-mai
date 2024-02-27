import { TemplePageProps } from '@/types'
import React from 'react'

const TemplePage2 = ({num, name, district, img, description} : TemplePageProps) => {
  return (
    <div className='page flex flex-col items-center px-10 py-10'>
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

        <div className='page px-10 py-10 grid grid-cols-5'>
            <div className='image-container col-span-3'>
                <img src={img} alt={name} />
            </div>
            <div className=' col-span-2 flex flex-col'>
                <div className='description-box'>
                    <p>{'        '}{description}</p>
                </div>

                <div className='map'>
                <img src="/Images/map-bg.png" alt="map-bg" className='map-bg'/>
                <div className='map-button'>
                    Map
                </div>
            </div>
            </div>
        </div>
    </div>
    
  )
}

export default TemplePage2