import React from 'react'
// import Image from 'next/image'
import projectsvg from '../public/assets/project.svg'
function Hero() {
  return (
    <div className="min-h-screen  lg:px-[4em]  bg-[#222222]">
    <div className=" flex ">
        <img src="/assets/design.svg" alt="Vercel Logo" className=' absolute top-4 md:top-20 md:left-[20%]  h-[40em]  bottom-0 right-0  ' />
        <div className="text-white px-4  lg:px-8 pt-[4em]">
            <div className="flex  font-semibold  text-2xl lg:text-7xl flex-col gap-2">
                <span>Building</span> 
                <span className="px-[1em]">Creativity</span>
            </div>
            <svg className="mt-10" width="186" height="11" viewBox="0 0 186 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.972973" y1="6.00007" x2="185.973" y2="5.00007" stroke="#6C63FF" stroke-width="10"/>
            </svg>
            <div className=' text-[12px] md:text-[14px] py-2 px-2 my-[2em] lg:w-[50vw]'>
            <p>
            Professional Product Designer, F.E Developer and Backend Developer with the full technologies for the better productivity Different resolutions have been cleared for the most clients and I am Based In Kigali..
            Professional Product Designer, F.E Developer and Backend Developer with the full technologies for the better productivity Different resolutions have been cleared for the most clients and I am Based In Kigali..
            Professional Product Designer, F.E Developer and Backend Developer with the full technologies for the better productivity Different resolutions have been cleared for the most clients and I am Based In Kigali..
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
        <div className="flex gap-2">
            <div className="h-4 w-10 rounded-xl bg-violet-500 animate-spin"></div>
            <span className='text-violet-500'>Frontend</span>
            <span>Development</span>
        </div>
        <div className="flex gap-2">
            <div className="h-4 w-10 rounded-xl bg-violet-500 animate-spin"></div>
            <span className='text-violet-500'>Backend</span>
            <span>Development</span>
        </div>
        <div className="flex gap-2">
            <div className="h-4 w-10  rounded-xl bg-violet-500 animate-spin"></div>
            <span className='text-violet-500'>UI/UX</span>
            <span>Designer</span>
        </div>
        <div className="flex gap-2">
            <div className="h-4 w-10 rounded-xl bg-violet-500 animate-spin"></div>
            <span className='text-violet-500'>WEB 3</span>
            <span>Technology</span>
        </div>
        <div className="flex gap-2">
            <div className="h-4 w-10 rounded-xl bg-violet-500 animate-spin"></div>
            <span className='text-violet-500'>Freelancing</span>
            <span>Globally</span>
        </div>
    </div>
    </div>
  )
}

export default Hero