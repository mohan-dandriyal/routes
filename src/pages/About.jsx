import React from 'react'

export default function About() {
  return (
    <div className='main-container dark:bg-gray-800 bg-white flex items-center duration-500' style={{ minHeight: "calc(100vh - 65px)" }}>
      <div className="container max-w-7xl min-h-fulll py-6 md:py-0 mx-auto flex flex-wrap md:px-4 px-2 lg:px-8 md:gap-0 ">
        <div className="w-full md:w-2/4">
          <span className='text-sm text-gray-400 dark:text-gray-400  block relative w-fit' >About <span className='absolute w-12 h-px dark:bg-gray-400 bg-gray-400' style={{right : "-140%", top: "10px", }}></span></span>
          <h3 className='text-2xl lg:text-3xl mt-6 dark:text-gray-400 leading-normal text-gray-500 font-semibold' style={{ lineHeight: 1.3 }}>A Web Developer and a Tech Enthusiast aimed at creating great websites.</h3>
          <p className='mt-6 w-full text-sm lg:text-1xl text-gray-500 md:leading-7 leading-6 dark:text-gray-400'>I am Mohan Chandra, Web Developer who specializes in creating great websites. I have spent a lot of time researching new technologies needed to create simple, light, and more functional websites. As a quick learner, I am also able to learn anything new very quickly. My ability to optimize your website effectively sets me apart from other web designers.</p>
          <div className="byn flex gap-4 mt-5">
            <button className='flex items-center gap-2 bg-gray-400 md:px-8 px-6 md:py-2 py-1 rounded-3xl border-gray-400 border-2 hover:bg-gray-400 hover:bg-transparent hover:text-gray-400 duration-500'>  Github</button>
            <button className='flex items-center gap-2 text-gray-400 md:px-8 px-4 md:py-2 py-1  rounded-3xl border-gray-400 border-2 hover:bg-gray-400 hover:text-black duration-500'>Download Cv</button>
          </div>
        </div>

        <div className="w-full mt-9 md:mt-0 md:w-2/4 mx-auto text-sm md:text-1xl dark:text-gray-400 text-gray-500 flex flex-col justify-end gap-2  md:px-4 px-2 lg:px-8">
          <p><strong>Name : </strong>Mohan Dandriyal</p>
          <p><strong>CITY : </strong>Almora Uttarakhand</p>
          <p><strong>INTEREST : </strong>Gardening, Traveling, Sports</p>
          <p><strong>Phone : </strong>91 8449141815</p>
          <p><strong>Email : </strong>mohandandriyal2000@gmail.com</p>
          <div className="byn flex gap-4 justify-end mt-5">
            <button className='flex items-center gap-2 text-black bg-gray-400 md:px-8 px-4 md:py-2 py-1 rounded-3xl border-gray-400 border-2 hover:bg-gray-400 hover:bg-transparent hover:text-gray-400 duration-500'>Contact</button>
          </div>
        </div>

      </div>
    </div>
  )
}
