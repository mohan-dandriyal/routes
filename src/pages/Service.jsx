import React from 'react'

export default function Service() {
  return (
    <div className='main-container dark:bg-gray-800 bg-white flex items-center duration-500' style={{ minHeight: "calc(100vh - 65px)" }}>
      <div className="row container max-w-7xl min-h-fulll py-6 md:py-0 mx-auto md:px-4 px-2 lg:px-8 md:gap-0 ">
      <span className='text-sm text-gray-400 dark:text-gray-400  block relative w-fit' >Service <span className='absolute w-12 h-px dark:bg-gray-400 bg-gray-400' style={{right : "-140%", top: "10px", }}></span></span>
      <div className="row flex flex-wrap">
        <div className="w-full md:w-2/4 lg:text-center md:px-2">
          <h3 className='text-2xl lg:text-3xl mt-6 dark:text-gray-400 leading-normal text-gray-500 font-semibold' style={{ lineHeight: 1.3 }}>Front End Developer</h3>
          <p className='mt-3 w-full text-sm md:text-1xl text-gray-500 md:leading-7 leading-6 dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eveniet, consequatur quasi enim reiciendis, at labore nisi possimus mollitia molestiae distinctio expedita dolorem ullam veniam eligendi recusandae doloremque sequi molestias dolores quas. Quaerat soluta modi in! Libero delectus reprehenderit pariatur.</p>
          <p className='mt-2 dark:text-gray-400 text-gray-500 text-sm md:text-1xl'><strong>Front End Skils :</strong> HTML5, CSS3 Bootstrap, javaScript, Talewind</p>
        </div>

        <div className="w-full md:w-2/4 lg:text-center md:px-2">
          <h3 className='text-2xl lg:text-3xl mt-6 dark:text-gray-400 leading-normal text-gray-500 font-semibold' style={{ lineHeight: 1.3 }}>Mern Stack Developer</h3>
          <p className='mt-3 w-full text-sm md:text-1xl text-gray-500 md:leading-7 leading-6 dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eveniet, consequatur quasi enim reiciendis, at labore nisi possimus mollitia molestiae distinctio expedita dolorem ullam veniam eligendi recusandae doloremque sequi molestias dolores quas. Quaerat soluta modi in! Libero delectus reprehenderit pariatur.</p>
          <p className='mt-2 dark:text-gray-400 text-gray-500 text-sm md:text-1xl'><strong>Front End Skils :</strong> React, Node, MongoDb</p>
        </div>
      </div>

      <div className="row flex flex-wrap justify-center mt-2 md:mt-10  ">
        <div className="w-full md:w-2/4 lg:text-center md:px-2">
          <h3 className='text-2xl lg:text-3xl mt-6 dark:text-gray-400 leading-normal text-gray-500 font-semibold' style={{ lineHeight: 1.3 }}>Back-End Developer</h3>
          <p className='mt-3 w-full text-sm md:text-1xl text-gray-500 md:leading-7 leading-6 dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eveniet, consequatur quasi enim reiciendis, at labore nisi possimus mollitia molestiae distinctio expedita dolorem ullam veniam eligendi recusandae doloremque sequi molestias dolores quas. Quaerat soluta modi in! Libero delectus reprehenderit pariatur.</p>
          <p className='mt-2 dark:text-gray-400 text-gray-500 text-sm md:text-1xl'><strong>Front End Skils :</strong> Node, Express, MongoDb</p>
        </div>
      </div>
      </div>
     
    </div>
  )
}
