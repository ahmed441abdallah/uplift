'use client'
import { useEffect } from 'react';
import Index from './Zoom Parallax/index.jsx';
import Lenis from 'lenis';
export default function ZoomParallax() {
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
            <Index></Index>
        </main>
    )
}