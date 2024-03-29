import React from 'react'

const About = () => {
  return (
    <div className=" lg:px-[4em] py-10 hidden px-2 bg-[#121212]">
         <div className="text-center flex text-white text-[14px] justify-center py-10  ">
                <h1 className="font-semibold  bg-backG px-4 py-4 text-[10px] animate-pulse">About</h1>
            </div>
        <div className='flex flex-col sm:flex-row  gap-2 place-items-center justify-evenly'>
        <div className="text-white py-4 max-w-[50vw]">
            <h1 className='py-5'>Hi, I'm <span className='py-4 border-b-2 border-yellow-500 text-xl font-black hover:text-backG'> Manzi Cedrick</span> </h1>
            <p className='pt-5 font-light text-[#ffffff92]   '>
            Full-Stack Software Engineer (JavaScript/Python + Ruby Expert) specializing in both server-side and client-side JavaScript and Python, Ruby frameworks such as React, Vue in frontend, Node.js, Django, Ruby on Rails in backend. With over 9 years of professional experience, I have had the opportunity to work on projects that run the gambit from financial platforms, to private business enterprise web applications, to building websites for digital marketing agencies, to working entrepreneurially as a freelance consultant and looking forward to contributing to build the future of the web with my next employer.
            </p>
            <p className='pt-5 font-light text-[#ffffff92]   '>
            Full-Stack Software Engineer (JavaScript/Python + Ruby Expert) specializing in both server-side and client-side JavaScript and Python, Ruby frameworks such as React, Vue in frontend, Node.js, Django, Ruby on Rails in backend. With over 9 years of professional experience, I have had the opportunity to work on projects that run the gambit from financial platforms, to private business enterprise web applications, to building websites for digital marketing agencies, to working entrepreneurially as a freelance consultant and looking forward to contributing to build the future of the web with my next employer.
            </p>
        </div>
        <div className='flex flex-col text-white gap-10 py-10 place-items-center '> 
            <div className='bg-backG h-56 w-56 rounded-full flex justify-center place-items-center '>
                <div>
                    <span className='text-9xl hover:scale-110 duration-300 cursor-pointer text-slate-100 animate-pulseport font-black '>3</span>
                </div>
            </div>
            <p>Years of <span className='font-black text-2xl'>Experience</span></p>
        </div>
        </div>
    </div>
  )
}

export default About