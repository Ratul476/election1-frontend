import Link from 'next/link'
import React from 'react'

const ReportPage = () => {
  return (
      <div className='container mx-auto mt-8'>
          <div className=''>
            <p className='font-bold text-base'>HOW WE REPORT THIS PAGE</p>
            <p className='leading-6 mt-3'>The Washington Post uses vote count data from the Associated Press, which relies on a 50-state network of local reporters to gather election results directly from state, county and local elections offices. AP checks vote tallies against state and county election websites to ensure they are accurate. AP also calls winners when they are certain that a candidate will win. The Post is reporting AP race calls for most elections in 2024, but will use additional vetting and sourcing before reporting race calls in presidential swing states and key Senate races. Read more about <Link className='text-[#2563eb] underline' href={""}>how we report vote counts and race calls</Link> </p>
          </div>
          <div className='mt-4 border-[1px] border-gray-300 p-4 rounded-xl shadow-lg'>
              <p className='font-bold text-sm'>Credits</p>
              <div className='mt-2 text-sm text-gray-600'>
                <p className='leading-6'>Development and production by Alexis Barnes, Lenny Bronner, Dana Cassidy, Jen Haskell, Claire Helms, Daniel Kao, Ben King, Shahryar Mozumder, Diane Napolitano, Patrick Nielsen, Mayra Perales, Anthony Pesce, Nhi Tran and Hai Vu. Product management by David Lee and project management by Henna Nawab.</p>  
                  <p className='leading-6 pt-2'>Design by Audrey Valbuena. Editing by Ashlyn Still and Rachel Van Dongen, with additional support from Scott Clement, Bryan Flaherty and Candace Mitchell. Visual editing by Chiqui Esteban, Greg Manifold and Virginia Singarayar.</p>  
              </div>
          </div>
    </div>
  )
}

export default ReportPage
