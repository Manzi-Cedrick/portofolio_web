import React from 'react'
import { FaInbox, FaLocationArrow, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contacts() {
  return (
    <div className="min-h-screen px-4  md:overflow-hidden lg:px-[8em] text-white  bg-[#121212]" id="contact">
<div className="text-center text-white text-[14px] flex flex-col justify-center place-items-center gap-4 py-10  ">
                <h1 className="font-semibold  bg-backG px-4 py-4 text-[10px] animate-pulse">Contact</h1>
            <p className="text-[#ffffffab]">Since I came into this field, I've gained a good understanding of problem-solving and how to approach challenges posed by different stacks and environments and have dedicated a lot of time to deliver fantastic products at all costs.</p>
            </div>
        <div className='md:flex flex-col gap-4 relative md:flex-row lg:flex-row justify-between py-10'>
            <div className='flex flex-col gap-8'>
            <div className='flex gap-4'>
                    <div className='p-5 flex justify-center place-items-center bg-slate-900 rounded-full'>
                    <FaInbox className="text-backG  text-3xl"/> 
                    </div>
                    <div className='py-4 '>
                        <p>cedrickmanzii0@gmail.com</p>
                        <p className='text-[14px] text-[#ffffff8a]'>Manzi Cedrick</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='p-5 flex justify-center place-items-center bg-slate-900 rounded-full'>
                    <FaPhone className="text-backG  text-3xl"/> 
                    </div>
                    <div className='py-4 '>
                        <p>+250 780 918 379</p>
                        <p className='text-[14px] text-[#ffffff8a]'>Manzi Cedrick</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='p-5 flex justify-center place-items-center bg-slate-900 rounded-full'>
                    <FaLocationArrow className="text-backG  text-3xl"/> 
                    </div>
                    <div className='py-4 '>
                        <p>Kigali,Rwanda</p>
                        <p className='text-[14px] text-[#ffffff8a]'>2022</p>
                    </div>
                </div>
            </div>
        <div className='h-[40vh] p-5 hidden lg:flex '>
            <img src={`/assets/connect.svg`} className='w-full h-full' alt="" />
        </div>
        <div className='pt-10 md:pt-0 min-w-[40vw]'>
            <div className='flex justify-between gap-2 '>
                <input type="text" placeholder="Your Name" className=' py-5  bg-slate-900 border-none min-w-[20vw] text-backG px-[1em]'/>
                <input type="text" placeholder="Your Email" className=' py-5  bg-slate-900 border-none min-w-[20vw]  text-backG px-[1em]'/>
            </div>
            <div className='flex flex-col gap-4 py-4 text-backG '>
                <input type="text" placeholder="Subject" className=' py-5 min-w-full  bg-slate-900 border-none  text-backG px-[1em]'/>
                <textarea name="messageBox" id="" placeholder='Enter message'  className=' resize-none py-5 min-w-full h-[30vh] bg-slate-900 border-none  text-backG px-[1em]' ></textarea>
            </div>
            <div >
                <button className='bg-backG text-white flex justify-center rounded-lg place-items-center gap-4 p-5 px-10'><FaPaperPlane/>Submit Your Reviews</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Contacts