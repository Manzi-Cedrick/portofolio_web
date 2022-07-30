import Link from 'next/link'
import React from 'react'
import { ProjectDataArray } from './data.types'

function Projects() {
  return (
    <div className="min-h-screen px-4  md:overflow-hidden lg:px-[8em] text-white  bg-black">
        <div className="text-center mx-auto flex text-backG text-[14px] flex-col gap-4 justify-center py-5  ">
            <h1 className="font-semibold">PORTOFOLIO</h1>
            <p className="text-white">Since I came into this field, I've gained a good understanding of problem-solving and how to approach challenges posed by different stacks and environments and have dedicated a lot of time to deliver fantastic products at all costs.</p>
        </div>
        <div className="flex justify-center text-backG gap-4">
            <button className="btn text-white rounded-full btn-primary bg-backG p-5 lg:px-10">
                All
            </button>
            <button className="btn text-white btn-primary  p-5 lg:px-10">
                UI
            </button>
            <button className="btn text-white btn-primary  p-5 lg:px-10">
                web
            </button>

            <button className="btn text-white btn-primary  p-5 lg:px-10">
                sanity
            </button>
            <button className="btn text-white btn-primary  p-5 lg:px-10">
                others
            </button>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {ProjectDataArray.map((project)=>(
            <div key={project.projectId} className='group bg-opacity-80 min-h-[30vh] min-w-[20vw] relative overflow-hidden'>
                <img src={`${project.projectImage}`} className='object-cover group-hover:scale  ' alt="" />
                <div className='text-white group-hover:flex bg-slate-900 w-full h-full bg-opacity-80 absolute top-0 left-0 flex-col hidden duration-500 justify-center place-items-center'>
                    <h1>{project.projectName}</h1>
                    <p>{project.projectCourses}</p>
                    <small>{project.tags.map((tageach)=>(tageach))}</small>
                    <div className='flex '>
                      <button className="btn text-white btn-primary  p-5 lg:px-10">View</button>
                      <Link href={`${project.projectUrl}`} className="btn text-white btn-primary  p-5 lg:px-10">Link</Link>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Projects