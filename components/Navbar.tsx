import Link from 'next/link'
import React from 'react'
import { LinkArr } from '../utils/constants'
import LogoIcons from '../icons/index'
// import LogoSvg from '../public/assets/logo.svg'
function Navbar() {

  return (
    <header className="navbar flex text-[12px] md:text-xl bg-backG h-14 text-white ">
    <div className='flex justify-center flex-0.5  place-items-center px-2 items-center gap-2'>
      {/* {LogoSvg} */}
      <div className='bg-red-500'>
      <LogoIcons/>
      </div>
        <span>
            Manzi
        </span>
        <span className='text-black'>Cedrick</span>
    </div>
    <div className='flex flex-1 text-[12px] justify-center'>
        <ul className='flex gap-8 justify-center place-content-center items-center text-white'>
          {LinkArr.map((link)=>(
              <li key={link.id}>
                <Link href={link.linkUrl}>{link.linkName}</Link>
              </li>
          ))}
        </ul>
    </div>
    <div className='flex place-items-center'>
      <button className='bg-white text-backG border-2 border-yellow-500 rounded-full w-44 h-12 text-sm'>Hire Me</button>
    </div>
</header>
  )
}

export default Navbar