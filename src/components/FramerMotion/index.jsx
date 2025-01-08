'use client';
import { useRef } from "react";
import styles from '../GSAP/page.module.scss';

import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';

const word = "with framer-motion";

export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

    const images = [
        {
            src: "https://cdn.sanity.io/images/nukkh59q/production/449d53cf079edcec26b0423b30612abf7970e44f-1699x1132.jpg?crop=&hotspot=&w=1280&h=853&auto=format",
            y: 0
        },
        {
            src: "https://cdn.sanity.io/images/nukkh59q/production/8d920b037ccb7f06c0e64f53c32895656f2c19d8-3855x5140.jpg?crop=&hotspot=&w=1280&h=1707&auto=format",
            y: lg
        },
        {
            src: "https://cdn.sanity.io/images/nukkh59q/production/1647208ccc3bb7fc86fea81c23d394cd3546039a-1499x994.jpg?crop=&hotspot=&w=1280&h=849&auto=format",
            y: md
        }
    ];

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.body}>
                <motion.h1 style={{ y: sm }}> offering a seamless experience from </motion.h1>
                <h1>concept to completion</h1>
            </div>
            <div className={styles.images}>
                {
                    images.map(({ src, y }, i) => {
                        return <motion.div style={{ y }} key={`i_${i}`} className={styles.imageContainer}>
                            <Image
                                src={src}
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                alt="image"
                                fill
                            />
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}
