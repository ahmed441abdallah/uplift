'use client';
import styles from './style.module.scss';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Use this for route changes
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './nav';
import { Phone } from 'lucide-react';
import Image from 'next/image.js';

export default function Index() {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        setIsActive(false);
    }, [pathname]); // Close the menu when the route changes

    const whatsappLink = "https://wa.me/+971588320428?text=Hello!"; // Replace 1234567890 with your WhatsApp number

    return (
        <div className={styles.header}>
            <div className={styles.bar}>
                <Link href={"/"}>
                    <Image src="/logo.png" alt="logo" width={21} height={21} />
                </Link>
                <div onClick={() => setIsActive(!isActive)} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                        <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                    </div>
                </div>
                <motion.div variants={opacity} animate={!isActive ? "open" : "closed"} className={styles.shopContainer}>
                    <div >
                        <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                            <Phone />
                        </Link>
                    </div>
                </motion.div>
            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className={styles.background}></motion.div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </div>
    );
}
