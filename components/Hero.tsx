import Link from 'next/link'
import React from 'react'
import { Combination } from '../utils/data.types'
function Hero() {
  return (
    <div id="hero" className="min-h-screen  lg:px-[4em]  bg-[#222222]">
    <div className=" flex ">
        <img src="/assets/design.svg" alt="Vercel Logo" className=' absolute top-4 md:top-20 md:left-[0%]  h-[40em]  bottom-0 right-0  ' />
        <div className="text-white px-4  lg:px-8 pt-[4em]">
            <div className="flex  font-semibold  text-2xl lg:text-7xl flex-col gap-2">
                <span>Building</span> 
                <span className="px-[1em]">Creativity</span>
            </div>
            <svg className="mt-10" width="186" height="11" viewBox="0 0 186 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.972973" y1="6.00007" x2="185.973" y2="5.00007" stroke="#6C63FF" strokeWidth="10"/>
            </svg>
            <div className=' text-[12px] md:text-[14px] py-2 px-2 my-[2em] lg:w-[50vw]'>
            <p>
            Full-Stack Software Engineer (JavaScript/Python + Ruby Expert) specializing in both server-side and client-side JavaScript and Python, Ruby frameworks such as React, Vue in frontend, Node.js, Django, Ruby on Rails in backend. With over 9 years of professional experience, I have had the opportunity to work on projects that run the gambit from financial platforms, to private business enterprise web applications, to building websites for digital marketing agencies, to working entrepreneurially as a freelance consultant and looking forward to contributing to build the future of the web with my next employer.


            </p>
           <div className='pt-8 flex gap-6'>
                <button className='bg-backG btn hover:bg-white hover:text-violet-900 duration-500 text-white p-5 px-8 md:px-10 rounded-full'>
                    Explore More
                </button>
                <button className='border-violet-500 btn border-2 border-solid text-violet-500 px-8 md:px-10 rounded-full'>
                    Download CV
                </button>
           </div>
            </div>
        </div>
        <div className="text-white hidden lg:flex  lg:px-8 ">
            
            <img src={`assets/project.svg`} alt="" />
        </div>
    </div>
    <div className="grid lg:pt-5 lg:grid-cols-5  lg:bg-transparent md:grid-cols-3 gap-[4em] lg:p-0 p-5 sm:grid-cols-2 grid-cols-1   text-white font-semibold ">
        {Combination.map((skill)=>(
        <div key={skill.id} className="flex gap-2">
            <div className="h-4 w-10 rounded-xl bg-violet-500 animate-spin"></div>
            <span className='text-violet-500'>{skill.path}</span>
            <span>{skill.category}</span>
        </div>
        ))}
    </div>
    </div>
  )
}

export default Hero