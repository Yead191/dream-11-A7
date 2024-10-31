/* eslint-disable no-unused-vars */
import React from 'react'
import footerImg from '../assets/logo-footer.png'


export default function Footer() {
    return (
        <div className='relative  bg-black'>Footer
            <div className='absolute -top-64  left-1/2 transform -translate-x-1/2 w-11/12 h-[300px] md:w-[1300px] md:h-[360px] mx-auto mt-24 border border-white rounded-xl '>
                <div className='text-center bg-img h-full place-content-center rounded-xl mx-1 -mt-1 bg-white'>
                    <h1 className='text-2xl font-bold'>Subscribe to our Newsletter</h1>
                    <p className='mb-4 mt-2 text-gray-500 '>Get the latest updates and news right in your inbox!</p>

                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-accent w-2/4 md:w-full max-w-xs" />
                    <button className='btn ml-2 bg-gradient-to-r from-orange-500 to-yellow-300'>Subscribe</button>


                </div>

            </div>

            <div className='mt-52 place-items-center'>
                <img className='md:w-[142px] md:h-[140px]' src={footerImg} alt="" />


            </div>



            <footer className="footer bg-black text-neutral-content p-10 mx-auto lg:flex lg:justify-around ">
                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <p className='text-gray-500 text-base'>We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact </a>
                </nav>
                <nav>
                    <h6 className="footer-title">Subscribe</h6>
                    <p className='text-gray-500 text-base'>Subscribe to our newsletter for the <br /> latest updates.</p>
                    <div className="join mt-5">
                        <input className="input input-bordered join-item" placeholder="Email" />
                        <button className="btn join-item rounded-r-2xl bg-gradient-to-r  from-orange-500 to-yellow-300 ">Subscribe</button>
                    </div>
                </nav>
            </footer>
            <hr />
            <p className='h-[40px] text-gray-300 mt-5 text-sm text-center'>Copyright © {new Date().getFullYear()} -All right reserved by Yead</p>





        </div>
    )
}
