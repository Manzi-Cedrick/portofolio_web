import React from 'react'
import { SkillsArray } from './data.types'
function Skills() {

    return (
        <div className="min-h-screen px-4  md:overflow-hidden lg:px-[8em] text-white  bg-black">
            <div className="text-center flex text-backG text-[14px] justify-center py-5  ">
                <h1 className="font-semibold">SKILLS & HIGHLIGHTS</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 gap-4 lg:gap-4 pt-[4em]'>
                {SkillsArray.map((skill) => (
                    <div key={skill.id} className='bg-zinc-900 hover:cursor-pointer text-violet-500 p-5 min-h-[30vh] rounded-lg min-w-[25vw] bg-opacity-65 bg-clip-padding' style={{ "backdropFilter": "blur(50px)" }}>
                        <div className='flex justify-between'>
                            <h1>{skill.courseName}</h1>
                            <div className='p-2 text-center font-bold drop-shadow-2xl px-8 rounded-full flex justify-center place-content-center bg-backG text-yellow-500'>
                                <span>{skill.ranking}</span>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-right text-white translate-x-18 translate-y-6'>{skill.percentage}%</h1>
                            <div className='bg-zinc-800 my-8 p-8 rounded-full w-full min-h-12 bg-opacity-60 bg-clip-padding' style={{ "backdropFilter": "blur(20px)" }}>
                                <div className="h-2 bg-white rounded-full w-full">
                                    <div className={`h-2 bg-backG flex justify-end rounded-full w-[${skill.width}] `}>
                                        <div className="h-4 -translate-y-1 bg-backG rounded-full w-4">
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center hover:cursor-pointer gap-6 py-16'>
                <div className='bg-backG  h-4 w-4 rounded-full'>
                </div>
                <div className='border-2 border-solid border-backG h-4 w-4 rounded-full'>
                </div>
                <div className='border-2 border-solid border-backG h-4 w-4 rounded-full'>
                </div>
            </div>
        </div>
    )
}

export default Skills