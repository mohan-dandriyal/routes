
import React from 'react'
import profile from '../image/my-image.png';

import { FaGithub } from "react-icons/fa";

export default function Banner() {
    return (
        <div className='main-container dark:bg-gray-800 bg-white flex items-center duration-500' style={{ minHeight: "calc(100vh - 64px)" }}>
            <div className="container max-w-7xl min-h-fulll py-6 md:py-0 mx-auto flex items-center flex-wrap md:flex-nowrap flex-col-reverse md:flex-row  gap-6  md:px-4 px-2 lg:px-8">
                <div className="md:w-2/4 w-full">
                    <span className='text-sm text-gray-400 dark:text-gray-400 dark:text-white'>Mern Stack Developer</span>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl mt-6 dark:text-gray-400 text-gray-500 font-semibold'><span className='block mb-1 md:mb-5'>Hello</span>
                        I am Mohan Chandra</h1>
                    <p className='mt-6 text-sm lg:text-1xl text-gray-500 md:leading-7 leading-6 dark:text-gray-400'>A Web Developer who specializes in creating great websites. I have spent a lot of time researching new technologies needed to create simple, light, and more functional websites. As a quick learner, I am also able to learn anything new very quickly. My ability to optimize your website effectively sets me apart from other web designers.</p>
                    <div className="byn flex flex-wrap gap-4 mt-5">
                        <button className='flex items-center gap-2 bg-gray-400 px-8 py-2 rounded-3xl border-gray-400 border-2 hover:bg-gray-400 hover:bg-transparent hover:text-gray-400 duration-500'> <FaGithub className='text-2xl' /> Github</button>
                        <button className='flex items-center gap-2 text-gray-500 px-8 py-2 rounded-3xl border-gray-400 border-2 hover:bg-gray-400 hover:text-black duration-500'>Download Cv</button>
                    </div>
                </div>

                <div className="w-2/4 mx-auto text-center  md:px-4 px-2 lg:px-8">
                    <img src={profile} alt="" className='lg:w-96 w-72 mx-auto ' />
                </div>
            </div>
        </div>
    )
}
