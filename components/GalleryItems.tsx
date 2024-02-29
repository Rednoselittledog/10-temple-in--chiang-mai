import React from 'react'
import Image from 'next/image'
import { GalleryItemProps } from '@/types'
import Link from 'next/link'

const GalleryItems = ({num, img, name, url}:GalleryItemProps) => {
  
  return (
    <div className='h-full'>
      <Link href={`https://templesinchiangmai.vercel.app/Other/${num}`} style={{ textDecoration: 'none' }}>
        <div className='flex flex-wrap shadow-lg shadow-black h-full bg-sub-color'>
          <div className=' w-full overflow-clip  flex justify-center'>
             <img src={img} alt={name} className='h-40 w-full  object-cover'/>
          </div>         
          <p className='py-4 pl-3 font-semibold text-sm text-black my-auto'>{name}</p>
      </div>
      </Link>
    </div>
  )
}

export default GalleryItems