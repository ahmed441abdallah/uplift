import styles from './styles.module.css';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
export default function Index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: "https://i.postimg.cc/8c0SMDfK/Majlis-Umm-Suqeim-Villa-Presentation-v02.jpg",

            scale: scale4
        },
        {
            src: "https://i.postimg.cc/TYKGGyBZ/Majlis-Umm-Suqeim-Villa-Presentation-v02fdf.jpg",

            scale: scale5
        },
        {
            src: "https://i.postimg.cc/3JTWxFCP/02-copy.jpg",

            scale: scale6
        },
        {
            src: "https://i.postimg.cc/d13rnmSW/F02.jpg",

            scale: scale5
        },
        {
            src: "https://i.postimg.cc/nzN2DPcK/0240-F.jpg",

            scale: scale6
        },
        {
            src: "https://i.postimg.cc/RZPctDg3/0240-F-11.jpg",

            scale: scale8
        },
        {
            src: "https://i.postimg.cc/yxz9B48G/0240-F-8.jpg",

            scale: scale9
        }
    ]

    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {
                    pictures.map(({ src, scale }, index) => {
                        return <motion.div key={index} style={{ scale }} className={styles.el}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={src}
                                    fill
                                    alt="image"
                                    placeholder='blur'
                                    layout='fill'
                                    blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABKklEQVQ4jYWTz0sDQRSG'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}