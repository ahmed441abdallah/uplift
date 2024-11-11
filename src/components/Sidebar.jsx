import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

// eslint-disable-next-line react/prop-types
const Sidebar = ({ setIsOpen, isOpen }) => {
    return (
        <div className={`fixed top-0 right-0 z-50 h-full bg-white transition-all duration-700 ${isOpen ? 'w-[100%] sm:w-[40%]' : 'w-0'
            } overflow-hidden`}
            style={{ boxShadow: isOpen ? '0 0 15px rgba(0, 0, 0, 0.2)' : 'none' }}>
            <div className="flex flex-col text-black ">
                <div className="p-4 cursor-pointer" onClick={() => setIsOpen(false)}>
                    <span className="flex gap-2 items-center text-gray-800"> <ChevronLeft size={20} strokeWidth={2.25} />Back </span>
                </div>
                <Link className="pl-6 py-2 border hover:pl-8   transition-all duration-200 text-black" href='/'>Home</Link>
                <Link className="pl-6 py-2 border hover:pl-8   transition-all duration-200  " href={'/about'}>About</Link>
                <Link className="pl-6 py-2 border hover:pl-8   transition-all duration-200" href={'/services'}>Services</Link>
                <Link className="pl-6 py-2 border hover:pl-8   transition-all duration-200" href={'/projects'}>Projects</Link>
                <Link className="pl-6 py-2 border hover:pl-8   transition-all duration-200" href={'/contact'}>Contact</Link>
                <Link className="pl-6 py-2 border hover:pl-8   transition-all duration-200" href={'/faq'}>FAQ</Link>
            </div>

        </div>
    )
}

export default Sidebar
