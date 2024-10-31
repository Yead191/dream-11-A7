/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import SinglePlayers from './SinglePlayers'


// eslint-disable-next-line react/prop-types
export default function AvailablePlayers({handleChoosePlayer}) {
    const [players, setPlayers] = useState([])
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=> res.json())
        .then(data=> setPlayers(data.players))
    },[])

    return (
        <>
        <div className='lg:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            {
                players.map((p)=><SinglePlayers  handleChoosePlayer={handleChoosePlayer} key={p.id} player={p}></SinglePlayers>)
            }
            

        </div>
        
        </>

    )
}
