import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [toggle,setToggle] = useState(false)
  return (
    <div>
         <nav class="bg-gray-800 relative">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between w-full">
            <div class="inset-y-0 relative z-20 left-0 flex items-center w-full md:w-2/4  justify-between">
              <div class="flex flex-shrink-0 items-center">
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              </div>

              <button onClick={() => setToggle(!toggle)} type="button" class="relative inline-flex md:hidden items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>

                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

            </div>

            <div
              class="flex flex-1 absolute
             md:relative md:h-auto h-dvh
              nav-list md:relative bg-pink-500 md:bg-transparent md:justify-end
               top-16 md:top-0 left-0 md:items-center 
                md:justify-center sm:items-stretch
                 sm:justify-start w-2/4 duration-500"
                 style={{transform: !toggle ? "translate(-120%)" : "translate(0%)"}}
            >
              <div class="w-full">
                  <ul className="flex flex-col md:flex-row px-4 md:px-0  w-full md:w-fit md:ms-auto">
                    <li className='w-full'><Link to="/" class="text-gray-300 block md:border-0 border-b-2 w-full hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</Link></li>
                    <li><Link to="/about" class="text-gray-300 block md:border-0 border-b-2 w-full hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</Link></li>
                    <li><Link to="/contact" class="text-gray-300 block md:border-0 border-b-2 w-full hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">contact</Link></li>
                    <li><Link to="/" class="text-gray-300 block md:border-0 border-b-2 w-full hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</Link></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <a href="#" class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
          </div>
        </div> */}
      </nav>
    </div>
  )
}
