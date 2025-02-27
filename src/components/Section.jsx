import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

    return (
        <div
            ref={container}
            className='relative flex items-center justify-center h-screen overflow-hidden'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
                <p className='w-[50vw] text-xl sm:text-[2vw] self-end uppercase mix-blend-difference'>Beauty and quality need the right time to be conceived and realised even in a world that is in too much of a hurry.</p>
                <p className='sm:text-[5vw] text-xl uppercase mix-blend-difference'>Premium  materials</p>
            </div>
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{ y }} className='relative w-full h-full'>
                    <Image src="https://i.postimg.cc/CMPYWCrG/Majlis-Umm-Suqeim-Villa-Presentation-v02fdfdfdf.jpg"

                        fill alt="image" style={{ objectFit: "cover" }} />
                </motion.div>
            </div>
        </div>
    )
}