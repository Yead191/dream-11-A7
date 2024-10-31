/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import user from '../assets/user-solid.svg'
import flag from '../assets/flag-solid.svg'


export default function SinglePlayers({ player, handleChoosePlayer }) {
  // console.log(player);
  const { playerId, name, country, image, role, battingType, bowlingType, biddingPrice } = player

  return (

    <>
      <div className='mx-2 my-2'>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className=' object-cover object-top w-full p-5 h-[350px] rounded-3xl '
              src={image}
              alt="Shoes" />
          </figure>
          <div className=" card-body ">
            <div className='px-2 flex items-center gap-4 h-full'>
              <img className='mb-2 w-[20px] h-[28px]' src={user} alt="" />
              <h2 className="card-title ">{name}</h2>
            </div>
            <div className='px-2 flex justify-between items-center'>
              <div className='flex gap-4 text-gray-400'>
                <div className='flex'>
                  <img className=' mb-2 w-[20px] h-[28px]' src={flag} alt="" />
                </div>
                <div>
                  <p className=' text-lg'>{country}</p>
                </div>
              </div>
              <button className='text-md font-medium btn btn-sm  mb-3'>{role}</button>
            

            </div>
            <hr />
            <p className='font-bold text-lg px-2'>Rating</p>
            <div className="px-2">
              <div className='flex justify-between'>
                <div>
                <p className='text-base font-bold'>{battingType}</p>

                </div>
                <div>
                <p className='text-base text-gray-400'>{bowlingType}</p>


                </div>
              </div>
              
            </div>
            <div className='p-2 flex justify-between items-center'>
              <p className='font-bold text-lg'>Price: ৳{biddingPrice} </p>
              <button onClick={()=>handleChoosePlayer(player) } className="btn btn-active btn-sm bg-transparent hover:bg-[#E7FE29]">Choose Player</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
