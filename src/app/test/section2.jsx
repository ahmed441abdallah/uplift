import { useTransform } from 'framer-motion';
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image.js'


const Section2 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
    return (
        <motion.div style={{ scale, rotate }}>
            <div className="relative h-screen  mb-4 mx-4">
                <Image
                    src="https://i.postimg.cc/8c0SMDfK/Majlis-Umm-Suqeim-Villa-Presentation-v02.jpg"
                    alt="img"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..." // Replace with your Data URL

                    fill
                />
            </div>
        </motion.div>
    )
}

export default Section2
