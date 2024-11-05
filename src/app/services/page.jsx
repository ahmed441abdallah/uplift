'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Circle } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Heading from '@/components/Heading';

const Services = () => {
    const skills = [
        { name: "Architectural Design", percentage: 90 },
        { name: "Engineering Services", percentage: 85 },
        { name: "Interior Design", percentage: 95 },
        { name: "Building Restoration", percentage: 82 },
    ];

    const services = [
        {
            title: "Sustainable Building",
            image: "https://images.unsplash.com/photo-1709418440123-270070054fb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            description: "Eco-friendly architectural solutions",
        },
        {
            title: "Renovations & Remodeling",
            image: "https://images.unsplash.com/photo-1709418440119-96055db3d645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
            description: "Transform existing spaces",
        },
        {
            title: "Custom Construction",
            image: "https://images.unsplash.com/photo-1709418440197-fb76ad8dd8a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
            description: "Bespoke building solutions",
        },
        {
            title: "Project Management",
            image: "https://images.unsplash.com/photo-1709418440159-9958a213324e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
            description: "End-to-end oversight",
        },
        {
            title: "Design & Planning",
            image: "https://media.istockphoto.com/id/1151345191/photo/relax-work-station-in-the-garden.webp?a=1&s=612x612&w=0&k=20&c=JcN2jFDhxsps-v4lLzBqnR8RkUQ_jAgJusMrj8D9RqI=",
            description: "Comprehensive architectural design",
        },
        {
            title: "Furniture & Decor",
            image: "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8fDB8fHww",
            description: "Interior styling solutions",
        },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className=' text-white'>
            <Heading text='Our Services' url='https://cdn.pixabay.com/video/2022/02/13/107573-678540733_tiny.mp4' />
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }} // Always animate to visible
                        transition={{ duration: 1 }} // Immediate fade in
                        className="text-3xl md:text-4xl font-medium leading-tight"
                    >
                        Architects excited about beauty affordability sustainability.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Card key={service.title} className="group overflow-hidden border-0 rounded-lg bg-gray-900">
                            <CardContent className="p-0 relative aspect-[4/3]">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-white text-lg font-medium">{service.title}</h3>
                                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                            <Circle className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
            <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto" ref={ref}>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
                        transition={{ duration: 1 }}
                        className="space-y-6"
                    >
                        <h2 className="text-sm uppercase tracking-wider text-gray-300">OUR SKILLS</h2>
                        <h3 className="text-4xl font-medium tracking-tight">We are skilful at all essentials.</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Our expertise includes architecture, planning, structural engineering, interior design, sustainable design, building restoration and construction services.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
                        transition={{ duration: 1, delay: 0.5 }} // Add delay here
                        className="space-y-8"
                    >
                        {skills.map((skill) => (
                            <div key={skill.name} className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">{skill.name}</span>
                                    <span className="text-sm text-gray-200">{skill.percentage}%</span>
                                </div>
                                <div className="h-1 bg-gray-500 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-white transition-all duration-1000 ease-out rounded-full"
                                        style={{
                                            width: isVisible ? `${skill.percentage}%` : "0%",
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
