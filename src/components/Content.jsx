import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link.js'
import React from 'react'

export default function Content() {
    return (
        <div className='bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between'>
            <Section1 />
            <Section2 />
        </div>
    )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[14vw] leading-[0.8] mt-10'>Uplift interiors</h1>
            <p>©copyright</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-10 sm:gap-20'>
            <div className='flex flex-col gap-2 mt-20'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>About</h3>
                <ul className='gap-2 flex flex-col font-sans text-gray-300'>
                    <li className='flex gap-1 mb-2'><MapPin />  Dubai, United Arab Emirates</li>
                    <li className='flex gap-1 mb-2'><Mail /> info@upliftinteriorsae.com</li>
                    <li className='flex gap-1 mb-2'><Phone /> +971 588320428</li>
                    <li className='flex gap-1 mb-2'><Phone /> +971 564240015</li>
                    <li className='flex gap-1 mb-2'><Phone /> +971 504397921</li>
                </ul>
            </div>
            <div className='flex flex-col gap-2 mt-20'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Links</h3>
                <Link href='/about'>About
                </Link>
                <Link href='/services'>Services
                </Link>
                <Link href='/contact'>Contact
                </Link>
                <Link href="/projects">Projects
                </Link>
                <Link href="/faq">FAQ
                </Link>
                <Link href="/licence.pdf" target='_blank'>license
                </Link>
                <Link href='https://www.instagram.com/upliftinteriors_ae?igsh=YzI3azN0N2lmMjRr' target='_blank'>Instagram
                </Link>
            </div>
        </div >
    )
}