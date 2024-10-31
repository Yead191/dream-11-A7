/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './allplayers.css'
import AvailablePlayers from './AvailablePlayers'
import SelectedPlayers from './SelectedPlayers'

// eslint-disable-next-line react/prop-types
export default function AllPlayers({handleActiveState, isActive, handleChoosePlayer, selectedPlayer, handleDelete}) {
  return (
    <div className=''>
        <div className='my-16  flex items-center justify-between '>
        {
            
            isActive.available?<h1 className=' text-3xl font-bold hidden md:block'>Available Players</h1> : <h1 className='text-3xl font-bold hidden md:block'>Selected Player ({selectedPlayer.length}/6)</h1>
        }
        <div >
            <button onClick={()=>handleActiveState('available')} className={`${isActive.available? "rounded-r-none pl-10 pr-10 btn text-lg  bg-[#E7FE29] font-bold ": "rounded-r-none pl-10 pr-10 btn text-lg font-light" }`}>Available</button>
            <button onClick={()=>handleActiveState('selected')} className={`${isActive.available? "rounded-l-none px-6 btn text-lg font-light ": "rounded-l-none px-6 btn text-lg bg-[#E7FE29] font-bold" }`}>Selected ({selectedPlayer.length})</button>
        </div>
       

    </div>
    {
            
            isActive.available? <AvailablePlayers handleChoosePlayer={handleChoosePlayer}></AvailablePlayers> : <SelectedPlayers handleActiveState={handleActiveState} isActive={isActive} handleDelete={handleDelete} selectedPlayer={selectedPlayer}></SelectedPlayers>
        }

    </div>
    
     

  )
}
