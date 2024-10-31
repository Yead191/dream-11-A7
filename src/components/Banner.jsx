/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import banner from '../assets/banner-main.png'
import backgrnd from '../assets/bg-shadow.png'

export default function Banner({claimCredit}) {
  const backgroundImg = {
    backgroundImage: {backgrnd}

  }
  return (
    <div className='place-items-center bg-[#131313] mt-36  mb-5 rounded-2xl p-3 lg:p-20 bg-img'>
        {/* img */}
        <div >
            <img src={banner} alt="" />

        </div>
        {/* text */}
        <div  className= 'my-9 text-center '>
            <h1 className='font-bold text-3xl lg:text-5xl text-[#FFFFFF]'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h4 className='font-medium text-lg lg:text-2xl text-gray-400 my-5'>Beyond Boundaries Beyond Limits</h4>
            <div className='border border-[#E7FE29] w-[180px] rounded-xl mx-auto my-3'>
            <button onClick={()=>claimCredit()} className='bg-[#E7FE29] px-5 py-3 rounded-xl my-1 font-semibold text-base btn' >Claim Free Credit</button>

            </div>

        </div>
    </div>
  )
}
