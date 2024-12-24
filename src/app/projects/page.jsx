'use client'
import Heading from '@/components/Heading'
import React, { useContext } from 'react'
import { projectContext } from '../../context/projectsContext.jsx'
import Image from 'next/image.js'
import { useRouter } from 'next/router.js'
import Link from 'next/link.js'

const Projects = () => {
    const { projects } = useContext(projectContext);

    console.log(projects);
    return (
        <div >
            <Heading text="Projects" url="https://cdn.pixabay.com/video/2020/09/15/50042-459915480_tiny.mp4" />
            <div className='p-4 sm:p-20 text-white'>
                <h1 className='text-4xl'>Our Projects</h1>
                <ul className='flex gap-8 mt-4'>
                    <li className='text-3xl border px-4 py-1'>ALL PROJECTS</li>
                    <li className='text-3xl border px-4 py-1'>RESIDENTIAL</li>
                    <li className='text-3xl border px-4 py-1'> FOOD &  BEVERAGE</li>
                    <li className='text-3xl border px-4 py-1'> RETAIL</li>
                    <li className='text-3xl border px-4 py-1'> CORPORATE</li>
                </ul>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 sm:p-20'>
                {projects.map(project => (
                    <Link href={`/projects/${project.id}`} key={project.id} className='p-4 rounded-lg' >
                        <Image src={project.images[0]} alt={project.name} width={400} height={400} className='w-full h-[400px] object-cover rounded-lg' />
                        <h1 className='text-2xl mt-4'>{project.name}</h1>
                        <p className='text-gray-500'>{project.type}</p>

                    </Link>
                ))}
            </div>


        </div>
    )
}

export default Projects
