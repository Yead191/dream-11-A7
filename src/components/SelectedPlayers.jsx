/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react'
import trash from '../assets/trash-solid.svg'

export default function SelectedPlayers({selectedPlayer, handleDelete, isActive, handleActiveState}) {

  return (
    <div>
        {
            selectedPlayer.map((player)=>(
                <div className='lg:w-4/6 mx-auto card card-side bg-base-100 shadow-xl mb-3 p-3 flex justify-between'>
                    <div className='flex items-center gap-5'>
                        <div><img className='object-cover object-top w-[70px] h-[70px] rounded-lg' src={player.image} alt="" /></div>
                        <div className='flex justify-between' > 
                            <div> <h5 className='card-title'>{player.name}</h5>
                            <p className='text-sm text-gray-400'>{player.role}</p></div>
                            
                           
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <p className='text-sm lg:text-lg font-semibold text-gray-500'>৳ {player.biddingPrice}</p>
                    <img onClick={()=>handleDelete(player.playerId)}  className=' cursor-pointer w-[20px] mr-5' src={trash} alt="" />


                    </div>
                    
                </div>
            ))
        }
        <div className='border border-black w-[180px] rounded-xl my-3'>
        <button onClick={()=> handleActiveState('available')} className='bg-[#E7FE29] ml-2 pl-5 py-3 rounded-xl my-1 font-semibold text-base btn' >Add More Player</button>

        </div>
        
    </div>
  )
}
