'use client'
import { ChevronDown, Menu } from 'lucide-react'
import { useState } from 'react'
import Sidebar from './Sidebar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuTrigger
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import ChatButton from './chatbtn'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-transparent fixed top-0 left-0 w-full z-40 font-sans">
            <div className="mx-auto bg-[#18181865] sm:rounded-2xl mt-0 sm:mt-4 flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-6">
                {/* Logo */}
                <Link href='/' className="block text-primary font-mono ">
                    <Image alt='logo' src={'/03.png'} width={100} height={100} className=' object-cover' ></Image>
                </Link>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block font-mono font-bold uppercase">
                        <ul className="flex items-center gap-6 text-sm">

                            <li>
                                <Link href="/about" className="text-[#ADB7BE] transition hover:text-gray-500/75">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-[#ADB7BE] transition hover:text-gray-500/75">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-[#ADB7BE] transition hover:text-gray-500/75">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-[#ADB7BE] transition hover:text-gray-500/75">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-[#ADB7BE] transition hover:text-gray-500/75">
                                    Faq
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Menu
                            onClick={() => setIsOpen(true)}
                            className="block sm:hidden cursor-pointer text-gray-500 hover:text-gray-700"
                            strokeWidth={2.25}
                        />
                    </div>
                </div>
            </div>

            {/* Sidebar for Small Screens */}
            <Sidebar setIsOpen={setIsOpen} isOpen={isOpen} />
        </header>
    )
}

export default Header
