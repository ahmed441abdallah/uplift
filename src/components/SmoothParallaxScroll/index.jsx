'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion';

const images = [
    "https://cdn.sanity.io/images/nukkh59q/production/7953317fcf647b655dddbe3308e138fa5322cde6-1244x1866.jpg?crop=&hotspot=&w=1280&h=1920&auto=format",
    "https://cdn.sanity.io/images/nukkh59q/production/be650964421d5b99ec478c5d0cceb6ba505c2604-1288x1931.jpg?crop=&hotspot=&w=1280&h=1919&auto=format",
    "https://images.unsplash.com/photo-1711419181219-cdebc7f3b2ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1719125217488-be5eab036dd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1712577622284-1c2a9d400ac6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1723259460129-13c50d00b201?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1730793665803-1c889830fc86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1702665809100-c43e6f15eb7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1722247520117-b37c824e616f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1684928365243-be7d3d9669a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1722942723349-06b170cf1aeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1723810738044-03b0056cdaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyMHx8fGVufDB8fHx8fA%3D%3D",
]

export default function Home() {

    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    })
    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

    useEffect(() => {
        const lenis = new Lenis()

        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight })
        }

        window.addEventListener("resize", resize)
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])

    return (
        <main className={styles.main}>
            <div className={styles.spacer}></div>
            <div ref={gallery} className={styles.gallery}>
                <Column images={[images[0], images[1], images[2]]} y={y} />
                <Column images={[images[3], images[4], images[5]]} y={y2} />
                <Column images={[images[6], images[7], images[8]]} y={y3} />
                <Column images={[images[9], images[10], images[11]]} y={y4} />
            </div>
            <div className={styles.spacer}></div>
        </main>
    )
}

const Column = ({ images, y }) => {
    return (
        <motion.div
            className={styles.column}
            style={{ y }}
        >
            {
                images.map((src, i) => {
                    return <div key={i} className={styles.imageContainer}>
                        <Image
                            src={src}
                            alt='image'
                            fill
                        />
                    </div>
                })
            }
        </motion.div>
    )
}