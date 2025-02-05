import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";

const KeyState = () => {

    const electionData = [
        {
            Division: 'Dhaka.',
            VoteData: [
                {
                    id: 1,
                    candidate: 'D. Trump',
                    party: 'GOP',
                    pct: '52.2%',
                    ev: 11,
                },
                {
                    id: 2,
                    candidate: 'K. Harris',
                    party: 'DEM',
                    pct: '40.2%',
                    ev: 11,
                },
                {
                    id: 3,
                    candidate: 'Other',
                    pct: '12.2%',
                    ev: 11,
                }
            ]

        },
        {
            Division: 'Chittagong.',
            VoteData: [
                {
                    id: 1,
                    candidate: 'D. Trump',
                    party: 'GOP',
                    pct: '52.2%',
                    ev: 11,
                },
                {
                    id: 2,
                    candidate: 'K. Harris',
                    party: 'DEM',
                    pct: '40.2%',
                    ev: 11,
                },
                {
                    id: 3,
                    candidate: 'Other',
                    pct: '12.2%',
                    ev: 11,
                }
            ]

        },
        {
            Division: 'Rajshahi.',
            VoteData: [
                {
                    id: 1,
                    candidate: 'D. Trump',
                    party: 'GOP',
                    pct: '52.2%',
                    ev: 11,
                },
                {
                    id: 2,
                    candidate: 'K. Harris',
                    party: 'DEM',
                    pct: '40.2%',
                    ev: 11,
                },
                {
                    id: 3,
                    candidate: 'Other',
                    pct: '12.2%',
                    ev: 11,
                }
            ]

        },
        {
            Division: 'Khulna.',
            VoteData: [
                {
                    id: 1,
                    candidate: 'D. Trump',
                    party: 'GOP',
                    pct: '52.2%',
                    ev: 11,
                },
                {
                    id: 2,
                    candidate: 'K. Harris',
                    party: 'DEM',
                    pct: '40.2%',
                    ev: 11,
                },
                {
                    id: 3,
                    candidate: 'Other',
                    pct: '12.2%',
                    ev: 11,
                }
            ]

        },
        {
            Division: 'Barisal.',
            VoteData: [
                {
                    id: 1,
                    candidate: 'D. Trump',
                    party: 'GOP',
                    pct: '52.2%',
                    ev: 11,
                },
                {
                    id: 2,
                    candidate: 'K. Harris',
                    party: 'DEM',
                    pct: '40.2%',
                    ev: 11,
                },
                {
                    id: 3,
                    candidate: 'Other',
                    pct: '12.2%',
                    ev: 11,
                }
            ]

        },
        {
            Division: 'Rongpur.',
            VoteData: [
                {
                    id: 1,
                    candidate: 'D. Trump',
                    party: 'GOP',
                    pct: '52.2%',
                    ev: 11,
                },
                {
                    id: 2,
                    candidate: 'K. Harris',
                    party: 'DEM',
                    pct: '40.2%',
                    ev: 11,
                },
                {
                    id: 3,
                    candidate: 'Other',
                    pct: '12.2%',
                    ev: 11,
                }
            ]

        },
        {
            Division: 'Mymensingh.',
            VoteData: [
                {
                    id: 1,
                    candidate: 'D. Trump',
                    party: 'GOP',
                    pct: '52.2%',
                    ev: 11,
                },
                {
                    id: 2,
                    candidate: 'K. Harris',
                    party: 'DEM',
                    pct: '40.2%',
                    ev: 11,
                },
                {
                    id: 3,
                    candidate: 'Other',
                    pct: '12.2%',
                    ev: 11,
                }
            ]

        },
    ]
  return (
      <div className='container mx-auto mt-10'>
        <div className=''>
            <div className='border-t-[1px] border-gray-500 pt-5'>
              <div className='text-2xl md:text-4xl font-semibold'>Key states to watch</div>
              <p className='text-base md:text-xl text-gray-700 leading-7 mt-2 md:mt-4'>The presidency is likely to be decided in these seven swing states, along with Nebraska’s 2nd District and Maine’s 2nd District.</p>
              </div>
            
              <div className='mt-4 selection:md:mt-8'>
                  <div className='text-lg font-semibold'><p>Key Division</p></div> 
                  
                  <div className='grid grid-cols-12 gap-4 md:gap-6 mt-3'>
                      
                      {electionData.map((data, i) => (
                        <div key={i} className='col-span-12 md:col-span-4 border-[1px] border-gray-300 rounded-2xl px-3 py-3 text-sm shadow-lg'>
                            <div className='flex gap-1 items-center'>
                                <div className='flex gap-2 text-base'>
                                      <p className='font-bold'>{data?.Division}</p>
                                    <p>MP</p>
                                </div>
                                <div className=''><MdArrowForwardIos /></div>
                              </div>
                                <div className='grid grid-cols-4 px-2 pt-1'>
                                    <div className='col-span-2'>Candidate</div>
                                    <div className='col-span-1'>Pct.</div>
                                    <div className='col-span-1'>E.V.</div>
                                </div>
                              {data.VoteData.map((vote, i) => (
                                  <div key={i} className=''>
                                      <div className='grid grid-cols-4 px-4 pt-1 border-b-[1px] border-gray-300 p-2'>
                                          <div className='col-span-2 flex gap-2 items-center'>
                                              <p className='text-sm font-bold'>{vote?.candidate}</p>
                                              <p className='text-xs'>{vote?.party}</p>
                                          </div>
                                          <div className='col-span-1'>{vote?.pct}</div>
                                          <div className='col-span-1'>{vote?.ev}</div>
                                      </div>
                                  </div>
                              ))}
                              <p className='px-4 pt-1'>Est. 100% counted</p>
                        </div>
                      ))}
                </div>
              </div>
        </div>
    </div>
  )
}

export default KeyState
