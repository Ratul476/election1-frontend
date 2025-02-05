import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";

const LatestUpdate = () => {
    const CaradData = [
        {
            id: 1,
            title: 'Who Trump has picked for his Cabinet and administration so far',
            time: '10:39 a.m. ET',
        },
        {
            id: 2,
            title: 'Gaetz pick renews attention on Trump’s call for recess...',
            time: '8:13 p.m. ET',
        },
        {
            id: 3,
            title: 'Top general faces brewing storm after Trump’s Pentagon pick',
            time: '8:04 p.m. ET',
        },
        {
            id: 4,
            title: 'Rep. Max Miller says Thune will not let Gaetz ‘walk right...',
            time: '7:45 p.m. ET',
        },
        {
            id: 5,
            title: 'Rep. Matt Gaetz’s resignation is significant. He is no longer a...',
            time: '8:13 p.m. ET',
        },
        {
            id: 6,
            title: 'House Republicans reach agreement to change rule on...',
            time: '6:04 p.m. ET',
        },
        {
            id: 7,
            title: 'Jeffries acknowledges that Democrats ‘will not regain’...',
            time: '3:08 p.m. ET',
        }
    ]
  return (
      <div className='container mx-auto mt-10'>
          <div className=''>
              <div className='flex justify-between mb-5'>
                  <div className='flex gap-1 justify-center text-center items-center text-gray-600 uppercase'>
                    <div className='text-base md:text-lg font-semibold'><p>Latest Update</p></div>          
                    <div className='mt-1'><MdArrowForwardIos /></div>
                  </div>
                <div className='flex gap-2'>
                    <div className='w-8 h-8 flex justify-center items-center rounded-full border-[1px] border-black bg-[#f2f2f2]'>
                        <FaArrowLeftLong color='#6d6d6d'/>
                    </div>
                    <div className='w-8 h-8 flex justify-center items-center rounded-full border-[1px] border-black'>
                        <FaArrowRightLong />  
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-8 gap-2'>
                {CaradData.map((data, i) => (
                    <div key={i} className='col-span-4 md:col-span-2 flex flex-col justify-between border-[1px] border-gray-300 rounded-2xl px-3 py-3 text-sm shadow-lg'>
                        <div className='pb-1'>{data.title}</div>
                        <p className='text-gray-600'>{data.time}</p>
                    </div>
                ))}
            </div>
              
          </div>
    </div>
  )
}

export default LatestUpdate
