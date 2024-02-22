import React from 'react'
import Image from 'next/image'
import { GalleryItemProps } from '@/types'

const GalleryItems = ({img, name}:GalleryItemProps) => {
  return (
    <div className='flex flex-col items-center'>
        <img src={img} alt={name} />
        <p className='py-2 font-bold text-lg'>{name}</p>
    </div>
  )
}

export default GalleryItems