import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen  lg:px-[4em] flex place-items-center justify-center bg-[#222222]">
        <div className="text-white py-4">
            <h1>Hi, I'm <span className='py-4 border-b-2 border-yellow-500 text-xl hover:text-backG'> Manzi Cedrick</span> </h1>
            <p>
            Full-Stack Software Engineer (JavaScript/Python + Ruby Expert) specializing in both server-side and client-side JavaScript and Python, Ruby frameworks such as React, Vue in frontend, Node.js, Django, Ruby on Rails in backend. With over 9 years of professional experience, I have had the opportunity to work on projects that run the gambit from financial platforms, to private business enterprise web applications, to building websites for digital marketing agencies, to working entrepreneurially as a freelance consultant and looking forward to contributing to build the future of the web with my next employer.
            </p>
        </div>
        <div>
            <div className='bg-backG h-44 w-44 rounded-full flex place-items-center '>
                <div>
                    <span className='text-4xl text-slate-400 animate-fade font-black '>9</span>
                </div>
            </div>
            <p>Years of <span className='font-black text-2xl'>Experience</span></p>
        </div>
    </div>
  )
}

export default About