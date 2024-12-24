'use client';
import { useEffect } from 'react';
import Lenis from 'lenis'
import Description from './Description.jsx';
import Intro from './Intro.jsx';
import Section from './Section.jsx';
export default function BackgroundParallax() {
    useEffect(() => {
        const lenis = new Lenis()
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <main >
            <Intro />
            <Description />
            <Section />
        </main>
    );
}