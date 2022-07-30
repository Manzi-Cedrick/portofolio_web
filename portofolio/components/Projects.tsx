import Link from 'next/link'
import React,{useEffect, useState} from 'react'
import { ProjectDataArray,Project_arr } from './data.types'
import { FaPlus, FaLink } from 'react-icons/fa';
function Projects() {
   const [ProjectDataArray,setProjectData] = useState<ProjectDataArray[]>(Project_arr);
//    const filter = (button:string) =>{
//        const filteredData = ProjectDataArray.filter((project)=>project.tags.includes(button));
//        return setProjectData(filteredData);
//     }
    // useEffect(() => {
     const filter = (button:string) =>{
         const filteredData = ProjectDataArray.filter((project)=>project.tags.includes(button));
         return setProjectData(filteredData);
    }
        // filter()
    // }, [ProjectDataArray])
    
  return (
    <div className="min-h-screen px-4  md:overflow-hidden lg:px-[8em] text-white  bg-black">
        <div className="text-center mx-auto flex text-backG text-[14px] flex-col gap-4 justify-center py-5  ">
            <h1 className="font-semibold">PORTOFOLIO</h1>
            <p className="text-white">Since I came into this field, I've gained a good understanding of problem-solving and how to approach challenges posed by different stacks and environments and have dedicated a lot of time to deliver fantastic products at all costs.</p>
        </div>
        <div className="flex justify-center text-backG gap-4">
            <button onClick={()=>setProjectData(Project_arr)} className="btn text-white rounded-full btn-primary bg-backG p-5 lg:px-10">
                All
            </button>
            <button onClick={()=>filter('ui')} className="btn text-white btn-primary  p-5 lg:px-10">
                UI
            </button>
            <button onClick={()=>filter('web')} className="btn text-white btn-primary  p-5 lg:px-10">
                web
            </button>

            <button onClick={()=>filter('sanity')} className="btn text-white btn-primary  p-5 lg:px-10">
                sanity
            </button>
            <button onClick={()=>filter('others')} className="btn text-white btn-primary  p-5 lg:px-10">
                others
            </button>
        </div>
        <div className='grid grid-cols-3 py-6 gap-4'>
          {ProjectDataArray.map((project)=>(
            <div key={project.projectId} className='group bg-opacity-80 min-h-[30vh] min-w-[20vw] relative overflow-hidden'>
                <img src={`${project.projectImage}`} className='object-cover group-hover:scale-100  ' alt="" />
                <div className='text-white group-hover:flex bg-slate-900 w-full h-full bg-opacity-80 absolute top-0 left-0 flex-col hidden duration-500 justify-center place-items-center'>
                    <h1 className='text-3xl font-bold text-slate-400'>{project.projectName}</h1>
                    <p>{project.projectCourses}</p>
                    <small>{project.tags.map((tageach)=>(tageach))}</small>
                    <div className='flex gap-4'>
                      <button className="btn text-white bg-backG rounded-full btn-primary  p-3 "> <FaPlus/> </button>
                      <button className="btn text-white bg-backG rounded-full btn-primary  p-3 "><FaLink/></button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Projects