import React from 'react'
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

const MorePost = () => {
    const CaradData = [
        {
            id: 1,
            title: 'Election Dashboard',
            image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/CMR6G5RS45GAPL2ACJUAYNYQNI.jpg&w=900&h=600',
        },
        {
            id: 2,
            title: 'Trump wins Pennsylvania, nearing victory in the presidential race',
            image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YD7LMDMUYS452DY3PCAXBTSG4E.jpg&w=900&h=600',
        },
        {
            id: 3,
            title: 'Presidential election results',
            image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LECM5U5YKUKZJ64FFLOWWQ7KMI.JPG&w=900&h=600',
        },
        {
            id: 4,
            title: 'Trump wins Pennsylvania, nearing victory in the presidential race',
            image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/2LSINYCVYBEG3L5XZPMPMGFHX4.jpg&w=900&h=600',
        },
        {
            id: 5,
            title: 'Presidential election results',
            image: 'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/3Z7WR6WSDEI6ZI5PJMVZM3G3CI.jpg&w=900&h=600',
        }
    ]
  return (
    <div className='container mx-auto mt-10'>
          <div className='border-b-[1px] border-gray-500 pb-5'>
              <div className='text-2xl md:text-4xl font-semibold mb-4 md:mb-8 text-gray-700'>Key states to watch</div>
              <div className='flex justify-between mb-2'>
                  <div className='text-lg md:text-2xl font-semibold pb-4'>Harris vs. Trump</div>          
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
                        <div key={i} className='col-span-3 md:col-span-2'>
                            <Image className='w-full h-auto object-cover' src={data.image} width={300} height={200} alt='' />
                            <p className='text-sm text-gray-600 px-4 py-2'>{data.title}</p>
                        </div>
                    ))}
                </div>
                  
              </div>
        </div>
  )
}

export default MorePost
