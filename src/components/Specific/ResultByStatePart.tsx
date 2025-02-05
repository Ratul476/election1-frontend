import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const ResultByStatePart = () => {
  return (
      <div className='container mx-auto mt-10'>
          <div className='text-base md:text-xl text-gray-700 leading-7'>
            <p className=''>Former president Donald Trump is projected to win the presidency, according to The Associated Press and Edison Research. The race between Trump and Vice President Kamala Harris was most competitive in seven key swing states: North Carolina, Pennsylvania, Michigan, Wisconsin, Georgia, Arizona and Nevada. In 2020, Trump won just one of these states — North Carolina — in losing the presidency to Joe Biden. But <Link href={""} className='underline text-blue-500'>The Washington Post’s Post Pulse polling average</Link>, which used high-quality surveys, showed a tight race headed into Election Day with each candidate leading narrowly in several swing states.</p>
          </div>
          <div className='mt-8'>
        <div className='text-2xl md:text-4xl font-semibold'>Results by state</div>
        

              <div className='mt-4 grid grid-cols-12 justify-between items-center gap-2'>
                  
                    <div className='col-span-6 md:col-span-5'>
                        <div className='flex gap-1 md:gap-2'>
                        <div className=''>
                            <Image className='aspect-square w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover' src={"https://images.ajkerpatrika.com/ads/Flag_of_Bangladesh.png"} alt='' width={80} height={80} />
                        </div>
                        <div className=''>
                            <div className=''>
                                <p className='font-semibold'>BNP</p>
                                <div className='flex py-1 gap-1'>
                                    <div className=''>
                                      <p className='text-3xl md:text-5xl font-bold text-[#006a51]'>150</p>   
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
                  
                  <div className='hidden md:col-span-2 relative md:flex items-center justify-center'>
                    <p className='absolute top-[35px] text-xs text-center'>240 to win</p>
                    <div className='w-[2px] h-3 bg-gray-700 relative top-[62px] l-0'></div>
                  </div>
  
                    <div className='col-span-6 md:col-span-5'>
                      <div className='flex gap-1 md:gap-2 justify-end'>
                        <div className=''>
                            <div className=''>
                                <p className='font-semibold text-end'>LEAGUE</p>
                                <div className='flex justify-end py-1 gap-1'>
                                    <div className='md:block hidden'>
                                      <p className=''>10,00,000 votes</p>
                                      <p className='text-end'>39.01%</p>
                                    </div>
                                    <div className=''>
                                      <p className='text-3xl md:text-5xl font-bold text-[#ff6820]'>122</p>   
                                    </div>
                                </div>
                            </div>
                          </div> 
                          <div className=''>
                            <Image className='aspect-square w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover' src={"https://images.ajkerpatrika.com/ads/India-Flag.webp"} alt='' width={80} height={80} />
                          </div>
                      </div>
                    </div>

                    <div className='md:hidden col-span-3 relative flex items-center justify-center top-2 left-28'>
                      <p className='absolute bottom-0 text-xs text-center'>240 to win</p>
                      <div className='w-[2px] h-3 bg-gray-700 relative top-4'></div>
                   </div>
          
                    <div className='col-span-12 w-full h-3 bg-[#ff6820] mt-1 md:mt-2'>
                      <div className='w-3/5 h-3 bg-[#006a51]'></div>
                    </div>
        </div>
        
        <div className='border-b-[1px] border-gray-700 mt-5'>Bangladesh Map</div>
          </div>
    </div>
  )
}

export default ResultByStatePart
