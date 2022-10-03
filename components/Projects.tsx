import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ProjectDataArray, Project_arr } from '../utils/data.types'
import { FaPlus, FaLink } from 'react-icons/fa';
function Projects() {
    const [ProjectDataArray, setProjectData] = useState<ProjectDataArray[]>(Project_arr);
    //    const [changeStyle,setchangeStyle] = useState<boolean>(false)
    // useEffect(() => {
    //     filter()
    // }, [Project_arr])
    const filter = (button: string) => {
        const filteredData = ProjectDataArray.filter((project) => project.tags.includes(button));
        return setProjectData(filteredData);
    }

    return (
        <div className="min-h-screen px-4  md:overflow-hidden lg:px-[8em] text-white  bg-[#121212]" id="project">
             <div className="text-center text-white text-[14px] flex flex-col justify-center place-items-center py-10  ">
                <h1 className="font-semibold  bg-backG px-4 py-4 text-[10px] animate-pulse">Portofolio</h1>
                <p className="text-[#ffffffab] py-4">Since I came into this field, I've gained a good understanding of problem-solving and how to approach challenges posed by different stacks and environments and have dedicated a lot of time to deliver fantastic products at all costs.</p>
            </div>
            <div className="flex justify-center text-backG gap-4">
                <button onClick={() => setProjectData(Project_arr)} className={`btn text-white rounded-full btn-primary bg-backG p-5 lg:px-10`}>
                    All
                </button>
                <button onClick={() => filter('ui')} className={`btn text-white btn-primary  p-5 lg:px-10`}>
                    UI
                </button>
                <button onClick={() => filter('web')} className={`btn text-white btn-primary  p-5 lg:px-10`}>
                    Web
                </button>
                <button onClick={() => filter('sanity')} className={`btn text-white btn-primary  p-5 lg:px-10`}>
                    Sanity
                </button>
                <button onClick={() => filter('others')} className={`btn text-white btn-primary p-5 lg:px-10`}>
                    Others
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-2 gap-6 lg:gap-4 py-[2em]'>
                {ProjectDataArray.map((project) => (
                    <div key={project.projectId} className='block'>
                        <div className='group bg-opacity-80 h-[50vh] min-w-[20vw] relative overflow-hidden'>
                            <img src={`${project.projectImage}`} className='object-cover h-full w-full group-hover:scale-110 duration-300  ' alt="" />
                            <div className='absolute flex-col text-white top-0 bottom-0 left-0 right-0 w-full h-full bg-slate-800 bg-opacity-50 hidden group-hover:flex group-hover:cursor-pointer justify-center place-items-center'>
                                <p>{project.projectCourses}</p>
                                <form action={`${project.projectUrl}`}>
                                    <button type="submit" className='md:p-3 p-2 hover:bg-[#9d53e8] flex justify-center place-items-center bg-backG text-white rounded-full'>
                                        <FaLink />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className='text-white flex p-5 bg-slate-900  min-h-[20vh] min-w-[20vw]   duration-500 justify-between '>
                            <div>
                                <h1 className='text-2xl font-black font-serif text-slate-400'>{project.projectName}</h1>
                                <p className='text-backG font-bold'>{project.projectCourses}</p>
                                <small>{project.tags.map((tageach) => (tageach))}</small>
                            </div>
                            <div className='flex gap-4 py-5'>
                                <button className="btn text-backG font-bold border-solid border-2 border-backG rounded-xl btn-primary flex justify-center gap-2 place-items-center  w-36 h-14"> <FaPlus /> <span>View More</span> </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects