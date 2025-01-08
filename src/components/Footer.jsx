import React from 'react'
import Content from './Content';
import Image from 'next/image.js';

export default function Footer() {
    return (
        <footer>
            <div className='h-screen flex flex-col text-[2vw] items-center justify-center'>
                <Image alt='logo' src='/logo.png' width={150} height={150} className=' object-cover mb-4 '></Image>

                <h2 className='max-w-[80%] sm:max-w-[45%] text-center text-xl sm:text-3xl leading-none capitalize text-gray-300'>  for Decoration and Execution L.L.C. is a premier interior design and fit-out company.</h2>
            </div>
            <div
                className='relative h-[800px]'
                style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            >
                <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
                    <div className='h-[800px] sticky top-[calc(100vh-800px)]'>
                        <Content />
                    </div>
                </div>
            </div>
        </footer>

    )
}