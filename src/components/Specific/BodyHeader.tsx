import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";

const BodyHeader = () => {
  return (
    <div className='container mx-auto'>
      <div className="grid grid-cols-9 mt-6 justify-center items-center">
                <div className="col-span-4 md:col-span-4">
                  <div className="flex gap-2 items-center">
                    <Image className="w-[30px] h-[20px]" src={"https://images.ajkerpatrika.com/ads/Flag_of_Bangladesh.png"} width={30} height={20} alt="" />
                    <p className="font-semibold">Election 2025</p>
                  </div>
              </div>
        
                <div className="hidden md:block col-span-4">
                  <div className="flex gap-5">
                    <p className="">How Trump Won</p>
                    <p className="">Presidential results</p>
                    <div className="flex justify-between gap-1">
                      <p className="">More</p>
                      <div className="content-center">
                        <IoIosArrowDown />
                      </div>
                    </div>
                  </div>
                </div>
        
                <div className="col-span-5 md:col-span-1">
                  <div className="flex gap-2 items-center">
                    <IoIosSearch />
                    <p className="md:font-bold">Find results</p>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default BodyHeader
