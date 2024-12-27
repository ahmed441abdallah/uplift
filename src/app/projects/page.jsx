'use client'
import Heading from '@/components/Heading'
import React, { useContext, useState } from 'react'
import { projectContext } from '../../context/projectsContext.jsx'
import Image from 'next/image.js'
import Link from 'next/link.js'
const Projects = () => {
    const CATEGORY = ['ALL PROJECTS', 'RESIDENTIAL', 'FOOD & BEVERAGE', 'RETAIL', 'CORPORATE'];
    const { projects } = useContext(projectContext);
    const [selectedCategory, setSelectedCategory] = useState('ALL PROJECTS');
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const handleCategory = (category) => {
        setSelectedCategory(category);
        if (category === 'ALL PROJECTS') {
            setFilteredProjects(projects);
        } else {
            const filteredProjects = projects.filter(project => project.type === category);
            setFilteredProjects(filteredProjects);
        }
    }
    return (
        <div >
            <Heading text="Projects" url="https://cdn.pixabay.com/video/2020/09/15/50042-459915480_tiny.mp4" />
            <div className='p-4 sm:p-20 text-white'>
                <h1 className='text-4xl'>Our Projects</h1>
                <ul className='flex gap-3 mt-4 cursor-pointer'>
                    {
                        CATEGORY.map(category => (
                            <li key={category} className={`text-xl flex items-center sm:text-3xl border px-1 sm:px-4 py-1 ${selectedCategory === category ? 'bg-gray-700 text-primary' : ''}`} onClick={() => handleCategory(category)} >{category}</li>))
                    }

                </ul>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 sm:p-20'>
                {filteredProjects.length > 0 ? filteredProjects.map(project => (
                    <Link href={`/projects/${project.id}`} key={project.id} className='p-4 rounded-lg' >
                        <Image src={project.images[0]} alt={project.name} width={400} height={400} className='w-full h-[400px] object-cover rounded-lg' />
                        <h1 className='text-2xl mt-4'>{project.name}</h1>
                        <p className='text-gray-500'>{project.type}</p>
                    </Link>
                )) : <p className="text-2xl">&quot;No projects found 🥴, We will add them soon ⏳&quot; </p>
                }
            </div>


        </div>
    )
}

export default Projects
