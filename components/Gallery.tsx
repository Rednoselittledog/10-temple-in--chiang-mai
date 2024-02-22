import React from 'react'
import Image from 'next/image'
import GalleryItems from './GalleryItems'

const Gallery = (source:any, name:string) => {
  return (
    <div className='page flex p-10 items-center py-16 '>
        <div className='flex flex-col justify-between'>
        <p className='text-5xl font-bold py-8'>10 Must-See Temples in Chiang Mai</p>
        <div className='shadow-xl shadow-gray-500 rounded-xl'>
            <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8 p-4'>
                <GalleryItems img = {'/Images/temp1.webp'} name="1 Wat Phra That Doi Suthep"/>
                <GalleryItems img = {'/Images/temp2.webp'} name="2 Wat Chedi Luang"/>
                <GalleryItems img = {'/Images/temp3.webp'} name="3 Wat Phra Singh"/>
                <GalleryItems img = {'/Images/temp4.webp'} name="4 Wat Suan Dok"/>
                <GalleryItems img = {'/Images/temp5.webp'} name="5 Wat Umong"/>
                <GalleryItems img = {'/Images/temp6.webp'} name="6 Wat Phra That Doi Kham"/>
                <GalleryItems img = {'/Images/temp7.webp'} name="7 Wat Sri Suphan"/>
                <GalleryItems img = {'/Images/temp8.webp'} name="8 Wat Chiang Man"/>
                <GalleryItems img = {'/Images/temp9.webp'} name="9 Wat Lok Moli"/>
                <GalleryItems img = {'/Images/temp10.webp'} name="10 Wat Phan Tao"/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Gallery