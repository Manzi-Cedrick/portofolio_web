import React from 'react'

function Projects() {
  return (
    <div className="min-h-screen px-4  md:overflow-hidden lg:px-[8em] text-white  bg-black">
        <div className="text-center mx-auto flex text-backG text-[14px] flex-col gap-4 justify-center py-5  ">
            <h1 className="font-semibold">PORTOFOLIO</h1>
            <p className="text-white">Since I came into this field, I've gained a good understanding of problem-solving and how to approach challenges posed by different stacks and environments and have dedicated a lot of time to deliver fantastic products at all costs.</p>
        </div>
        <div className="flex justify-center text-backG gap-4">
          <ul className="flex gap-4 ">
            <li>
              <a href="/">ALL</a>
            </li>
            <li>
              <a href="/ui">UI</a>
            </li>
            <li>
              <a href="/web">Web</a>
            </li>
            <li>
              <a href="/web">Sanity</a>
            </li>
            <li>
              <a href="/others">Others</a>
            </li>
          </ul>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Projects