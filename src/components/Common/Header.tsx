import React from 'react'
import { MdManageSearch } from "react-icons/md";

function Header() {
  return (
      <div className="grid grid-cols-12 border-b-[1px] border-gray-300 px-6 md:py-2 py-5 mb-4 gap-4 sticky top-0 left-0 right-0 bg-white w-full z-50">
            <div className="col-span-1 md:col-span-2 content-center">
                <MdManageSearch size={26}/>
              </div>
              
              <div className="col-span-8 md:col-span-8 content-center">
                  <div className='text-center'>
                    <p className='md:text-2xl text-lg font-bold'>The Washinton Post</p>
                    <p className='text-gray-400 text-sm md:block hidden italic'>Democracy Dies in Darkness</p>
                  </div>
              </div>
              
                <div className="col-span-3 md:col-span-2 content-center">
                  <div className='flex justify-between md:pl-12'>
                        <div className="bg-[#166dfb] md:block hidden text-white font-bold text-base rounded-2xl px-4 py-1 text-center">
                            <p className=''>Subscribe</p>
                        </div>
                        <div className='text-black text-xs md:text-base font-bold'>
                            <p className=''>Sign in</p>
                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Header
