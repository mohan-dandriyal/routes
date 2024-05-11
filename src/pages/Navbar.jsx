import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa6";

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  let [theme, setTheme] = useState("light")
  let element = document.documentElement;
  useEffect(() => {
    let thememode = localStorage.getItem("theme")
    setThemeMode(thememode)
    if (thememode === "dark") {
      element.classList.add("dark")
    }
    else if (thememode === "light") {
      element.classList.remove("dark")
      element.classList.add("light")
    }
    else {
      element.classList.add("light")
    }

  }, [theme])


  window.addEventListener('scroll', () => {
    setToggle(false)
  })



  function setThemeMode(mode) {
    localStorage.setItem("theme", mode)
    setTheme(mode)
  }
  return (
    <div>
      <nav className="dark:bg-gray-800 duration-500  relative">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between w-full">
            <div className="inset-y-0 relative z-20 left-0 flex items-center w-full md:w-2/4  justify-between">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
              </div>

              <button onClick={() => setToggle(!toggle)} type="button" className="relative inline-flex md:hidden items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

            </div>

            <div
              className="flex flex-1 absolute
             md:relative md:h-auto h-dvh
              nav-list md:relative dark:bg-gray-800 md:bg-transparent md:justify-end
               top-16 md:top-0 left-0 md:items-center 
                md:justify-center sm:items-stretch bg-gray-300 md:bg-transparent  md:dark:bg-transparent
                md:w-fit  sm:w-96 w-full
                 sm:justify-start w-2/4 duration-500 "

              style={{ transform: !toggle ? "translate(-120%)" : "translate(0%)", zIndex: "99" }}
            >
              <div className="w-full">
                <ul className="flex items-center flex-col  gap-5 pt-4 md:flex-row px-4 md:px-0  w-full md:w-fit md:ms-auto gap-3">
                  <li className='w-full'><Link to="/" onClick={() => setToggle(false)} className="text-gray-600 rounded-none pb-5 md:pb-0 dark:text-gray-300 duration-500 block md:border-0 border-b-2 w-full hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</Link></li>
                  <li className='w-full'><Link to="/about" onClick={() => setToggle(false)} className="text-gray-600 rounded-none pb-5 md:pb-0 dark:text-gray-300 duration-500 block md:border-0 border-b-2 w-full hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</Link></li>
                  <li className='w-full'><Link to="/service" onClick={() => setToggle(false)} className="text-gray-600 rounded-none pb-5 md:pb-0 dark:text-gray-300 duration-500 block md:border-0 border-b-2 w-full hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Service</Link></li>
                  <li className='w-full'><Link to="/skills" onClick={() => setToggle(false)} className="text-gray-600 rounded-none pb-5 md:pb-0 dark:text-gray-300 duration-500 block md:border-0 border-b-2 w-full hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Skills</Link></li>
                  <li className='w-full'><Link to="/contact" onClick={() => setToggle(false)} className="text-gray-600 rounded-none pb-5 md:pb-0 dark:text-gray-300 duration-500 block md:border-0 border-b-2 w-full hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</Link></li>
                  <li className='ms-3'>
                    {
                      theme === "light" ? <MdOutlineWbSunny className='text-black text-2xl' onClick={() => setThemeMode("dark")} /> :
                        <FaRegMoon className='text-gray-300 text-2xl' onClick={() => setThemeMode("light")} />
                    }

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
