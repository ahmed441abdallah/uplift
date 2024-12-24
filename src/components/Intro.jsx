import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Intro() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "10vh"]);

    return (
        <div ref={container} className="h-screen overflow-hidden">
            <motion.div style={{ y }} className="relative h-full">
                <Image
                    src="https://i.postimg.cc/0ymsMTkn/Majlis-Umm-Suqeim-Villa-Presentation-v02fd.jpg"
                    fill
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                    className='object-cover'

                />
            </motion.div>
        </div>
    );
}
