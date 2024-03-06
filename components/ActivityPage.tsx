import { ActivityPageProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const ActivityPage = ({num,name,img,activity} : ActivityPageProps) => {
  return (
    <div className='page-2 lex flex-col items-center overflow-hidden bg-main-color'>
        <div className="px-10 pt-20 pb-1 flex flex-col items-center">
            <div className="p-3 w-full min-h-80 rounded-xl shadow-md shadow-gray-300 bg-sub-color flex flex-col">

                <p className='title-text-main'>{num} {name}</p>
                <div className='md:grid lg:grid-cols-6 md:gap-6 min-h-64 flex flex-col'>

                    <div className="md:col-span-2 relative object-cover min-h-40 md:min-h-0 mb-2 md:mb-0">
                        <Image src={img} alt={name} fill className='object-cover'/>
                    </div>
                    <p className='md:col-span-4 object-cover my-auto description-box'>{activity}</p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ActivityPage