import React from 'react'
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const Election2024 = () => {
    const CaradData = [
        {
            id: 1,
            title: 'How Donald Trump found his footing and fought his way back to the White House',
            image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/IS7HVCSA2RGBSOGQWVPD2DEZ4Q.JPG&w=900&h=600',
        },
        {
            id: 2,
            title: 'How counties are shifting in the 2024 presidential election',
            image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CMR6G5RS45GAPL2ACJUAYNYQNI.jpg&w=900&h=600',
        },
        {
            id: 3,
            title: '2024 turnout is near the 2020 record. See how each state compares.',
            image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/B3O3QR7LCVDLHGPU4RMFLMOOEI.jpg&w=900&h=600',
        },
        {
            id: 4,
            title: 'How Trump built his victory, vote by vote',
            image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XLUSUBLFWVAS7JPFKKZJE4HBYE.jpg&w=900&h=600',
        },
    ]
  return (
    <div className='container mx-auto mt-10'>
              <div className='border-b-[1px] border-gray-500 pb-5'>
                <div className='flex justify-between mb-2'>
                    <div className='text-2xl font-bold pb-5'>Follow the latest results, coverage and analysis</div>          
                    <div className='flex gap-2'>
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
                        <div key={i} className='col-span-2'>
                            <Image className='w-full h-auto object-cover' src={data.image} width={300} height={200} alt='' />
                            <p className='text-sm text-gray-600 px-4 py-2'>{data.title}</p>
                        </div>
                    ))}
                </div>
                  
              </div>
        </div>
  )
}

export default Election2024
