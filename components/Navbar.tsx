import React from 'react'

function Navbar() {
  return (
    <header className="navbar flex text-[12px] md:text-xl bg-backG h-14 text-white ">
    <div className='flex justify-center flex-0.5  place-items-center px-2 items-center gap-2'>
        {/* {logoicon} */}
        <span>
            Manzi
        </span>
        <span className='text-black'>Cedrick</span>
    </div>
    <div className='flex flex-1 text-[12px] justify-center'>
        <ul className='flex gap-8 justify-center place-content-center items-center text-white'>
          <li><a href="">Home</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
        </ul>
    </div>
</header>
  )
}

export default Navbar