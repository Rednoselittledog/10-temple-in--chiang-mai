import React from 'react'
import relate_stories from '@/relate_stories.json';
import { TemplePage2 } from '@/components';
let data = relate_stories.data

const page = ({ params }: { params: { num: string } }) => {
    let index : number = Number(params.num)
    let item = data[index-1]
    console.log(item)
  return (
    <TemplePage2
            num={Number(item.num)}
            name={String(item.name)}
            district={String(item.district)}
            img={String(item.img)}
            description={String(item.description)}
            url={String(item.url)}
            />
  )
}

export default page