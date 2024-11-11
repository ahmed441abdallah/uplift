import Heading from '@/components/Heading'
import React from 'react'

const Projects = () => {
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
        </div>
    )
}

export default Projects
