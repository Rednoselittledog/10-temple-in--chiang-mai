import { TransportationPageProps } from '@/types'
import React from 'react'
import { DirectionMap } from '.'

const TransportationPage = ({num, from, to, from_location, to_location}:TransportationPageProps) => {
  return (
    <div className='page-2 lex flex-col items-center overflow-hidden bg-main-color'>
        <div className="px-10 pt-20 pb-1 flex flex-col items-center">
            <div className="p-3 w-full min-h-80 rounded-xl shadow-md shadow-gray-300 bg-sub-color flex flex-col items-center">

                <div className='md:grid lg:grid-cols-2 md:gap-6 min-h-64 flex flex-col w-full'>
                    <div className='col-span-1 flex flex-col justify-center'>
                        <p className='title-text-sub text-black col-span-1 description-box'>{from} ---{'>'} {to}</p>
                        <p>Traveling to this place, in case you rent a car yourself or travel with a map, you can see the map from here.</p>
                    </div>
                    <div className='col-span-1 md:min-h-0 min-h-52'>
                        <DirectionMap from={from_location} to={to_location}/>
                    </div>


                </div>

            </div>
        </div>
    </div>
  )
}

export default TransportationPage