import Link from 'next/link'
import React,{ useState} from 'react'
import { LinkArr } from '../utils/constants'
import LogoIcons from '../icons/index'
import { FaEllipsisH, FaEllipsisV } from 'react-icons/fa'
// import LogoSvg from '../public/assets/logo.svg'
function Navbar() {
  const [showClick,setshowClick] = useState<Boolean>(false)
  return (
    <header className={`${showClick && 'flex flex-col gap-8 duration-500'} navbar flex text-[12px] justify-between top-0 left-0 right-0 px-6 z-20 md:text-xl bg-backG h-[10vh] text-white `}>
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
    <div className={`${showClick && 'flex flex-col bg-red-500'} hidden md:flex flex-1 text-[12px] justify-center`}>
        <ul className='flex gap-10 justify-center place-content-center items-center font-bold text-white'>
          {LinkArr.map((link)=>(
              <li key={link.id}>
                <Link href={link.linkUrl}>{link.linkName}</Link>
              </li>
          ))}
        </ul>
    </div>
    <div className={`${showClick && 'flex flex-col' } hidden md:flex place-items-center`}>
      <button className='bg-white text-backG border-2 hover:bg-violet-500 hover:text-white duration-500 border-white rounded-md w-44 py-4 text-sm'>Hire Me</button>
    </div>
    <div className='flex md:hidden place-items-center'>
      <button className='border-2 py-4 px-4 rounded-md bg-white text-backG hover:bg-transparent hover:text-white duration-500 hover:cursor-pointer' onClick={() =>setshowClick((prev)=>!prev)}><FaEllipsisV/></button>
    </div>
</header>
  )
}

export default Navbar