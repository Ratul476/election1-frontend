import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";

const KeyDistrict = () => {

    const electionData = [
        {
            Division: 'Maine 2nd Dristict',
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
            Division: 'Neb. 2nd Dristict.',
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
      <div className='mt-8'>
              <div className='text-lg font-bold'><p>Key congressional district results</p></div> 
                        
                        <div className='grid grid-cols-12 gap-6 mt-2 '>
                            
                            {electionData.map((data, i) => (
                              <div key={i} className='col-span-4 border-[1px] border-gray-300 rounded-2xl px-3 py-3 text-sm shadow-lg'>
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
                                                <div className='col-span-1 '>{vote?.pct}</div>
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
  )
}

export default KeyDistrict
