


import { useEffect, useState } from 'react';
import { OthersDays } from '../otherDays/OthersDays';
import { useWhatDay } from '../../hooks/useWhatDay';
import { useIcon } from '../../hooks/useIcon';


export const TheDay = ({ days }) => {

    return (

        <div className='mt-28 w-11/12 flex flex-col items-center'>
            <div className=" flex flex-col items-center text-neutral-500 font-normal">
                <div className='flex justify-center'>
                    <h3 className='text-4xl'>{useWhatDay(days.data[0].datetime)}</h3>
                </div>

                <img className='w-28 mt-8 icon-color' src={useIcon(days.data[0].icon)} />
                <div className='flex items-end justify-center w-56 mt-4 gap-4'>
                    <p className='text-5xl'>{days.data[0].tempmax + '°'}</p>
                    <p className='text-4xl'>{days.data[0].tempmin + '°'}</p>
                </div>
                <div className='mt-1'>
                    <h4 className='font-normal text-3xl'>{days.data[0].conditions}</h4>
                </div>
            </div>

            <div className='border-b mt-20 w-11/12 border-neutral-600 brightness-50' ></div>

            <div className='mt-10 mb-20  flex flex-wrap gap-x-36 gap-y-14 justify-center min-w-min '>

                <OthersDays days={days.data}/>


            </div>
        </div>
    )
}
