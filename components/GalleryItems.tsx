import React from 'react'
import Image from 'next/image'
import { GalleryItemProps } from '@/types'
import Link from 'next/link'

const GalleryItems = ({img, name, url}:GalleryItemProps) => {
  return (
    <div>
      <Link href={url}>
        <div className='flex flex-wrap shadow-md shadow-gray-300 h-full'>
          <div className=' w-full overflow-clip  flex justify-center'>
             <img src={img} alt={name} className='h-40 w-full  object-cover'/>
          </div>         
          <p className='py-4 pl-3 font-semibold text-sm'>{name}</p>
      </div>
      </Link>
    </div>
  )
}

export default GalleryItems