'use client';
import Image from "next/image";
import { motion } from 'framer-motion';
import { MoveRight } from "lucide-react";
import { useEffect, useState } from 'react';
import Heading from "@/components/Heading";

const OFFERS = [
    {
        id: 1,
        title: "RESIDENTIAL",
        image: "https://tadao.qodeinteractive.com/wp-content/uploads/2023/04/h5-photo-feed-img-6.jpg"
    },
    {
        id: 2,
        title: "RETAIL",
        image: "https://tadao.qodeinteractive.com/wp-content/uploads/2023/04/h5-photo-feed-img-4.jpg"
    },
    {
        id: 3,
        title: " FOOD & BEVERAGE ",
        image: "https://tadao.qodeinteractive.com/wp-content/uploads/2023/04/h5-photo-feed-img-2.jpg"
    },
    {
        id: 4,
        title: "CORPORATE",
        image: "https://tadao.qodeinteractive.com/wp-content/uploads/2023/04/h5-photo-feed-img-5.jpg"
    }
];

const About = () => {
    const [isFirstAnimationComplete, setIsFirstAnimationComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFirstAnimationComplete(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className=" text-primary">
            <Heading text="About " url="https://cdn.pixabay.com/video/2021/10/12/91744-636709154_tiny.mp4" />
            <section>
                <motion.div
                    className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    onAnimationComplete={() => setIsFirstAnimationComplete(true)} // Mark first animation as complete
                >
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <h2 className="text-3xl font-medium sm:text-4xl">
                            About UPLIFT for Idecoration and Execution L.L.C.                        </h2>
                    </motion.div>

                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <motion.div
                            className="relative h-64 overflow-hidden sm:h-80 lg:h-full"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <Image
                                alt="building"
                                width={600}
                                height={600}
                                src="https://images.unsplash.com/photo-1709418359735-9cf3b793558d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="absolute inset-0 rounded-md h-full w-full object-cover"
                            />
                        </motion.div>

                        <motion.div
                            className="lg:py-16"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <article className="space-y-4 text-gray-300">
                                <motion.p
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                >
                                    Established in 2023, UPLIFT for Decoration and Execution L.L.C. is a premier interior design and fit-out company based in Dubai, UAE. We specialize in transforming spaces through innovative design and meticulous execution, offering a seamless experience from concept to completion. Our services encompass everything from turnkey solutions to full fit-out projects, allowing clients to enjoy beautifully crafted spaces without the stress of managing every detail.

                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                >
                                    We understand that designing a home is a personal journey, and we’re honored to be part of it. Our app combines inspiration, community, and innovation to bring you the tools you need to create your dream space. With user-friendly features and professional insights, we’re redefining the interior design experience by offering you everything you need to create, visualize, and complete your project with confidence. Our easy-to-use tools and professional guidance make it simple to explore your style and create spaces that inspire joy and comfort.
                                </motion.p>
                            </article>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            <section>
                <motion.h2
                    className="text-4xl text-center"
                    initial={{ opacity: 0, y: -50 }} // Start off-screen above
                    animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position
                    transition={{ duration: 0.5, delay: 0.2 }} // Duration and delay for the fade-in
                >
                    What We Offer
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-4 mt-4 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }} // Duration and delay for the fade-in
                >
                    {
                        OFFERS.map(offer => (
                            <div key={offer.id} className="relative">
                                <Image
                                    alt={offer.title}
                                    width={600}
                                    height={600}
                                    src={offer.image}
                                    className="rounded-md h-[400px] object-cover"
                                />
                                <div className="absolute inset-0 border border-[#1a1a1a] bg-black opacity-90 hover:opacity-0 transition duration-1000 flex justify-center items-center">
                                    <h1 className="text-3xl uppercase flex gap-2 items-center">{offer.title} <MoveRight /></h1>
                                </div>
                            </div>
                        ))
                    }
                </motion.div>

                <motion.section
                    className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8"
                    initial={{ opacity: 0 }} // Start with zero opacity
                    animate={isFirstAnimationComplete ? { opacity: 1 } : { opacity: 0 }} // Start invisible until first animation is done
                    transition={{ duration: 1, delay: 0.6 }} // Duration and delay for the fade-in
                >

                </motion.section>
            </section>
        </div>
    );
};

export default About;
