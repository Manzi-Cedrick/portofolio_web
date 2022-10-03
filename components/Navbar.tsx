import Link from 'next/link'
import React from 'react'
import { LinkArr } from '../utils/constants'
import LogoIcons from '../icons/index'
// import LogoSvg from '../public/assets/logo.svg'
function Navbar() {

  return (
    <header className="navbar flex text-[12px] sticky px-6 z-20 md:text-xl bg-backG h-[10vh] text-white ">
    <div className='flex justify-center flex-0.5  place-items-center  items-center gap-2'>
      {/* {LogoSvg} */}
      <div className='pt-5'>
      <LogoIcons/>
      </div>
        <span className='text-white font-bold'>
            Manzi
        </span>
        <span className='text-black font-black'>Cedrick</span>
    </div>
    <div className='hidden md:flex flex-1 text-[12px] justify-center'>
        <ul className='flex gap-10 justify-center place-content-center items-center font-bold text-white'>
          {LinkArr.map((link)=>(
              <li key={link.id}>
                <Link href={link.linkUrl}>{link.linkName}</Link>
              </li>
          ))}
        </ul>
    </div>
    <div className='hidden md:flex place-items-center'>
      <button className='bg-black text-white border-2 border-white rounded-md w-44 py-4 text-sm'>Hire Me</button>
    </div>
</header>
  )
}

export default Navbar