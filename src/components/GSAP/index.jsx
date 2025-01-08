'use client';
import { useLayoutEffect, useRef } from "react";
import styles from './page.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Image from "next/image";

gsap.registerPlugin(ScrollTrigger)
const word = "with gsap";

export default function Index() {
    const container = useRef(null);
    const images = ["https://cdn.sanity.io/images/nukkh59q/production/c1a4c579db895c2d3a19ce078a291c247892b608-5367x8051.jpg?crop=&hotspot=&w=1280&h=1920&auto=format", "https://cdn.sanity.io/images/nukkh59q/production/bfae8b4733d2c7f9ce27a89e57378d74a7a07698-5396x8094.jpg?crop=&hotspot=&w=1280&h=1920&auto=format", "https://cdn.sanity.io/images/nukkh59q/production/bf8b85b90e491132cdeee2d2bacae866ea6ed0dd-5344x8016.jpg?crop=&hotspot=&w=1280&h=1920&auto=format"];
    const lettersRef = useRef([])
    const imagesRef = useRef([])
    const title1 = useRef(null);
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            })
                .to(title1.current, { y: -50 }, 0)
                .to(imagesRef.current[1], { y: -150 }, 0)
                .to(imagesRef.current[2], { y: -255 }, 0)
            lettersRef.current.forEach((letter, i) => {
                tl.to(letter, {
                    top: Math.floor(Math.random() * -75) - 25,
                }, 0)
            })

        })
        return () => context.revert();
    }, [])

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.body}>
                <h1 ref={title1}>We specialize in transforming spaces</h1>
                <h1 >through innovative design</h1>

            </div>
            <div className={styles.images}>
                {
                    images.map((image, i) => {
                        return <div key={`i_${i}`} ref={el => imagesRef.current[i] = el} className={styles.imageContainer}>
                            <Image
                                src={image}
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

                                alt="image"
                                fill
                            />
                        </div>
                    })
                }
            </div>
        </div>
    )
}
