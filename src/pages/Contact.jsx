import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className='main-container dark:bg-gray-800 bg-white flex items-center duration-500' style={{ minHeight: "calc(100vh - 65px)" }}>
      <div className="row container max-w-7xl min-h-fulll py-6 md:py-0 mx-auto md:px-4 px-2 lg:px-8 md:gap-0 ">
        <span className='text-sm text-gray-400 dark:text-gray-400 font-semibold  block relative w-fit' >Contact Us <span className='absolute w-12 h-px dark:bg-gray-400 bg-gray-400' style={{ right: "-110%", top: "10px", }}></span></span>
        <div className="row flex flex-wrap items-center">
          <div className="w-full md:w-2/4  ">
              <h3 className='mt-6 text-gray-500 text-3xl font-semibold'>Get the Contact</h3>

              <div className="details flex flex-col gap-3 mt-4">
                <p className='dark:text-gray-300 text-gray-500'>Phone No : <a href="">+91 8449141814</a></p>
                <p className='dark:text-gray-300 text-gray-500'>Email Id : <a href="">mohandandriyal200@gmail.com</a></p>
                <p className='dark:text-gray-300 text-gray-500'>Address : <a href="">Almora Uttarakhand</a></p>
              </div>

              <ul className='flex gap-5 mt-6 text-1xl md:text-2xl '>
                <li><a href="" className='border-2 border-blue-700 dark:text-gray-100 text-gray-800 block bg-blue-700 md:bg-transparent p-1 md:p-2 rounded hover:bg-blue-700 duration-500'> <FaFacebookF /> </a></li>
                <li><a href="" className='border-2 border-blue-700 dark:text-gray-100 text-gray-800 block bg-blue-700 md:bg-transparent p-1 md:p-2 rounded hover:bg-blue-700 duration-500'> <FaInstagram /> </a></li>
                <li><a href="" className='border-2 border-blue-700 dark:text-gray-100 text-gray-800 block bg-blue-700 md:bg-transparent p-1 md:p-2 rounded hover:bg-blue-700 duration-500'> <FaLinkedinIn /> </a></li>
                <li><a href="" className='border-2 border-blue-700 dark:text-gray-100 text-gray-800 block bg-blue-700 md:bg-transparent p-1 md:p-2 rounded hover:bg-blue-700 duration-500'> <FaTwitter /> </a></li>
              </ul>
          </div>

          <div className="w-full md:w-2/4 md:mt-0 mt-8 md:px-2">
            <form action="" className='w-full  lg:w-96 mx-auto flex flex-col gap-6'>
              <div className="form-group">
                <div className="lable mb-2 font-semibold italic dark:text-400 text-gray-500">
                  <label htmlFor="" className='mb-3'>Name</label>
                </div>
                <input type="text" class=" w-full dark:text-gray-300 text-gray-900 rounded-md border-0 py-2 pl-7 pr-20 dark:bg-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-200 duration-500"  placeholder='Name...' />
              </div>

              <div className="form-group">
                <div className="lable mb-2 font-semibold italic dark:text-400 text-gray-500">
                  <label htmlFor="" className='mb-3'>Email</label>
                </div>
                <input type="text" class=" w-full dark:text-gray-300 rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 dark:bg-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-200 duration-500"  placeholder='Email Id...' />
              </div>

              <div className="form-group">
                <div className="lable mb-2 font-semibold italic dark:text-400 text-gray-500">
                  <label htmlFor="" className='mb-3'>Subject</label>
                </div>
                <input type="text" class=" w-full dark:text-gray-300 rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 dark:bg-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-200 duration-500"  placeholder='Subject...' />
              </div>

              <div className="form-group">
                <div className="lable mb-2 font-semibold italic dark:text-400 text-gray-500">
                  <label htmlFor="" className='mb-3'>Email</label>
                </div>
                <textarea rows="3" class=" w-full dark:text-gray-300 rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 dark:bg-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-200 duration-500" placeholder='Message...'></textarea>
              </div>

              <div className="form-group">
                <button className='bg-red-500 py-2 px-6 rounded text-gray-300 font-semibold italic hover:bg-blue-600 duration-500'>Send Message</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
