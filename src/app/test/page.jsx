'use client'
import React, { useEffect, useRef } from 'react'
import Section1 from './section1.jsx'
import Section2 from './section2.jsx';
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';

const Page = () => {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])
    return (
        <main ref={container} className="relative h-[200vh]">
            <Section1 scrollYProgress={scrollYProgress} />
            <Section2 scrollYProgress={scrollYProgress} />
            <Section2 scrollYProgress={scrollYProgress} />
            <Section2 scrollYProgress={scrollYProgress} />
        </main>
    )
}

export default Page
