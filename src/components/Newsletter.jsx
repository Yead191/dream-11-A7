/* eslint-disable no-unused-vars */
import React from 'react'

export default function Newsletter() {
    return (
        <div className=' w-[1300px] h-[340px] mx-auto mt-24 border border-white rounded-xl '>
            <div className='text-center bg-img h-full place-content-center rounded-xl p-5'>
                <h1 className='text-2xl font-bold'>Subscribe to our Newsletter</h1>
                <p className='mb-4 mt-2 text-gray-500 '>Get the latest updates and news right in your inbox!</p>
                
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-accent w-full max-w-xs" />
                    <button className='btn ml-2 bg-gradient-to-r from-orange-500 to-yellow-300'>Subscribe</button>


            </div>

        </div>
    )
}
