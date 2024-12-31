'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Image from './Image';

const links = [
  {
    title: "Home",
    href: "/",
    src: "home.png"
  },
  {
    title: "Services",
    href: "/services",
    src: "shop.png"
  },
  {
    title: "About Us",
    href: "/about",
    src: "home.png"
  },
  {
    title: "Projects",
    href: "/projects",
    src: "lookbook.png"
  },
  {
    title: "Contact",
    href: "/contact",
    src: "contact.png"
  },
  {
    title: "FAQ",
    href: "/faq",
    src: "contact.png"
  }
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive} alt="images" />
      </div>
    </motion.div>
  )
}