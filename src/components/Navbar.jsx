/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import logo from '../assets/logo.png'


export default function Navbar({wallet}) {
  return (
    <div className="navbar  App min-w-screen fixed top-0 z-50 w-11/12 mx-auto p-5 backdrop-blur-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>Fixture</a></li>
        <li><a>Teams</a></li>
        <li><a>Schedules</a></li>
      </ul>
    </div>
    <div>
    <div>
      <img src={logo} alt="Logo" />
    </div>
    </div>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>

      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
    </ul>
  </div>
  <div className="lg:ml-16">
    <a className="btn font-bold text-xl "><span className="text-yellow-500 font-normal">৳</span> {wallet}</a>
  </div>
</div>
  )
}
