'use client';
import ArchitectureFeatures from "@/components/ArchitectureFeatures";
import Divider from "@/components/Divider";
import Experience from "@/components/experience ";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import HeroSlider from "@/components/HeroSlider";
import { ProjectsSlider } from "@/components/Projects-slider";
import { TabsDemo } from "@/components/TabsDemo";
import BackgroundParallax from "../components/Background Parallax.jsx";
import ZoomParallax from "../components/ZoomParallax.jsx";
import { AnimatePresence } from "framer-motion";
import Preloader from '@/components/Preloader/index.jsx'
import GSAP from "@/components/GSAP";
import FramerMotion from "@/components/FramerMotion";

import { useEffect, useState } from "react";
import SmoothParallaxScroll from "@/components/SmoothParallaxScroll/index.jsx";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])
  return (
    <main >
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <HeroSlider />
      <Divider />
      <HeroParallaxDemo />
      <HeroScrollDemo />
      <ProjectsSlider />
      <Experience />
      <TabsDemo />
      <SmoothParallaxScroll />
      <ZoomParallax />
      <BackgroundParallax />
      <ArchitectureFeatures />
      <GSAP></GSAP>
      <FramerMotion />

    </main>
  );
}
