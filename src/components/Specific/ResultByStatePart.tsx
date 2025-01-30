import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ResultByStatePart = () => {
  return (
      <div className='container mx-auto mt-10'>
          <div className='text-xl text-gray-700 leading-7'>
            <p className=''>Former president Donald Trump is projected to win the presidency, according to The Associated Press and Edison Research. The race between Trump and Vice President Kamala Harris was most competitive in seven key swing states: North Carolina, Pennsylvania, Michigan, Wisconsin, Georgia, Arizona and Nevada. In 2020, Trump won just one of these states — North Carolina — in losing the presidency to Joe Biden. But <Link href={""} className='underline text-blue-500'>The Washington Post’s Post Pulse polling average</Link>, which used high-quality surveys, showed a tight race headed into Election Day with each candidate leading narrowly in several swing states.</p>
          </div>
          <div className='mt-10'>
        <div className='text-2xl md:text-4xl font-bold'>Results by state</div>
        

              <div className='mt-5 grid grid-cols-7 justify-between'>
                  
                    <div className='col-span-3'>
                      <div className='flex gap-2'>
                        <div className=''>
                            <Image className='aspect-square w-[60px] h-[60px] object-cover' src={"https://images.ajkerpatrika.com/ads/Flag_of_Bangladesh.png"} alt='' width={60} height={60} />
                        </div>
                        <div className=''>
                            <div className=''>
                                <p className='font-bold text-sm'>Bangladesh</p>
                                <div className='flex gap-2'>
                                    <div className=''>
                                      <p className='text-2xl md:text-5xl font-bold text-[#006a51]'>150</p>   
                                    </div>
                                    <div className='md:block hidden'>
                                      <p className=''>10,00,000 votes</p>
                                      <p className=''>60.99%</p>
                                    </div>
                                </div>
                            </div>
                        </div>  
                      </div>
                    </div>
                  
                  <div className='col-span-1 relative items-center justify-center flex'>
                    <p className='absolute bottom-0'>240 to win</p>
                    <div className='w-[2px] h-3 bg-gray-700 relative top-[50px] l-0'></div>
                  </div>
                  
                    <div className='col-span-3'>
                      <div className='flex gap-2 justify-end'>
                        <div className=''>
                            <div className=''>
                                <p className='font-bold text-end'>India</p>
                                <div className='flex gap-2 justify-end'>
                                    <div className='md:block hidden'>
                                      <p className=''>10,00,000 votes</p>
                                      <p className='text-end'>39.01%</p>
                                    </div>
                                    <div className=''>
                                      <p className='text-2xl md:text-5xl font-bold text-[#ff6820]'>122</p>   
                                    </div>
                                </div>
                            </div>
                          </div> 
                          <div className=''>
                              <Image className='aspect-square w-[60px] h-[60px] object-cover' src={"https://images.ajkerpatrika.com/ads/India-Flag.webp"} alt='' width={60} height={60} />
                          </div>
                      </div>
                    </div>
                
                    <div className='col-span-7 w-full h-3 bg-[#ff6820] mt-2'>
                      <div className='w-3/5 h-3 bg-[#006a51]'></div>
                    </div>
        </div>
        
        <div className='border-b-[1px] border-gray-700 mt-5'>Bangladesh Map</div>
          </div>
    </div>
  )
}

export default ResultByStatePart
