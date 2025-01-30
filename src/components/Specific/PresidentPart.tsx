import React from 'react'
import { GoClock } from "react-icons/go";

const PresidentPart = () => {
  return (
    <div className='container mx-auto'>
      <div className='mt-16 flex flex-col justify-center items-center font-bold border-b-[1px] border-gray-300 pb-12'>
        <p className='uppercase text-sm md:text-base'>Election Results 2025</p>
            <p className='text-5xl md:text-6xl font-semibold mt-4'>President</p>
            <div className='md:flex block justify-center mt-4 gap-3 text-gray-600 font-normal'>
          <div className=''>On this page: <span className='underline'>Results by state</span></div>
          <div className='flex gap-2'>
              <div className='underline flex justify-center items-center gap-2'>
                <p className='hidden md:block w-1 h-1 bg-slate-600 rounded-full'></p>
                <p className=''>Post Pulse</p>
              </div>
              <div className='underline flex justify-center items-center gap-2'>
              <p className='hidden md:block w-1 h-1 bg-slate-600 rounded-full'></p>
                <p className=''>Key states to watch</p>
              </div>

          </div>
            </div>
        <div className='mt-4 text-gray-600 text-sm md:text-base font-normal gap-2 flex justify-center items-center'>
                <div className=''><GoClock /></div>
                <div className=''>Updated Dec. 30, 2025 4:30 p.m. ET</div>
            </div>
      </div>
    </div>
  )
}

export default PresidentPart
