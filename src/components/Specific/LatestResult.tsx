import React from 'react'
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const LatestResult = () => {
    const CaradData = [
        {
            id: 1,
            title: 'Election Dashboard',
            image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/GLL3B75BEVEY7JTZNOXHWA34EI.jpg&w=900&h=600',
        },
        {
            id: 2,
            title: 'Trump wins Pennsylvania, nearing victory in the presidential race',
            image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XOVU6UR4JVEZJAHZGZDJEAPUQA.jpg&w=900&h=600',
        },
        {
            id: 3,
            title: 'Presidential election results',
            image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5Y6ELMPI55GCPIBXOWWG4DQRV4.jpg&w=900&h=600',
        },
        {
            id: 4,
            title: 'Trump wins Pennsylvania, nearing victory in the presidential race',
            image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XOVU6UR4JVEZJAHZGZDJEAPUQA.jpg&w=900&h=600',
        },
        {
            id: 5,
            title: 'Presidential election results',
            image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5Y6ELMPI55GCPIBXOWWG4DQRV4.jpg&w=900&h=600',
        }
    ]
  return (
      <div className='container mx-auto mt-10'>
          <div className='border-b-[1px] border-gray-500 pb-5'>
            <div className='flex justify-between mb-2'>
                <div className='text-xl md:text-2xl font-bold pb-5'>Follow the latest results, coverage and analysis</div>          
                  <div className='hidden gap-2 md:flex '>
                    <div className='w-8 h-8 flex justify-center items-center rounded-full border-[1px] border-black bg-[#f2f2f2]'>
                        <FaArrowLeftLong color='#6d6d6d'/>
                    </div>
                    <div className='w-8 h-8 flex justify-center items-center rounded-full border-[1px] border-black'>
                        <FaArrowRightLong />  
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-6 gap-2'>
                {CaradData.map((data, i) => (
                    <div key={i} className='col-span-6 md:col-span-2'>
                        <Image className='w-full h-auto object-cover' src={data.image} width={300} height={200} alt='' />
                        <p className='text-sm text-gray-600 px-4 py-2'>{data.title}</p>
                    </div>
                ))}
            </div>
              
          </div>
    </div>
  )
}

export default LatestResult