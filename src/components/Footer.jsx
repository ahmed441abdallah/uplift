import Image from 'next/image'
import React from 'react'
import { Modal } from './animated-modal'
import { AnimatedModalDemo } from './AnimatedModalDemo'
import Link from 'next/link'
import { Instagram, LocateFixedIcon, LocateIcon, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='grid grid-cols-1 sm:grid-cols-4 border-t text-primary p-20 gap-8'>
            <div className='col-span-1 sm:col-span-2 mt-10'>
                <Image alt='logo' src='/logo.png' width={100} height={100} className=' object-cover mb-2'></Image>
                <p className=' leading-6 w-full sm:w-3/4 text-gray-300 tracking-wider mb-2'>Welcome to Uplift UPLIFT for Decoration and Execution L.L.C. is a premier interior design and fit-out company based in Dubai, UAE. We specialize in transforming spaces through innovative design and meticulous execution, offering a seamless experience from concept to completion. Our services encompass everything from turnkey solutions to full fit-out projects</p>
                <Link href='https://www.instagram.com/upliftinteriors_ae?igsh=YzI3azN0N2lmMjRr' target='_blank'>
                    <Instagram></Instagram>

                </Link>

            </div>
            <div className='col-span-1  mt-10'>
                <ul className='gap-2 flex flex-col font-sans text-gray-300'>
                    <li className='text-2xl font-medium  mb-4 text-white uppercase'>Contact</li>
                    <li className='flex gap-1 mb-2'><MapPin />  Dubai, United Arab Emirates</li>
                    <li className='flex gap-1 mb-2'><Mail /> info@upliftinteriorsae.com</li>
                    <li className='flex gap-1 mb-2'><Phone /> +971 588320428</li>
                    <li className='flex gap-1 mb-2'><Phone /> +971 564240015</li>
                    <li className='flex gap-1 mb-2'><Phone /> +971 504397921</li>
                </ul>


            </div>
            <div className='col-span-1  mt-10'>
                <ul className='gap-2 flex flex-col font-sans text-gray-300'>
                    <li className='text-2xl font-medium   mb-4 text-white uppercase'> Links</li>
                    <Link href='/about'><li>About</li>
                    </Link>
                    <Link href='/services'><li>Services</li>
                    </Link>
                    <Link href='/contact'><li>Contact</li>
                    </Link>
                    <Link href="/projects"><li>Projects</li>
                    </Link>
                    <Link href="/faq"><li>Faq</li>
                    </Link>
                    <Link href="/licence.pdf" target='_blank'><li>license</li>
                    </Link>
                </ul>
            </div>
            <AnimatedModalDemo />
            <p >© 2025 Uplift. ALL RIGHTS RESERVED </p>
        </footer>
    )
}

export default Footer
