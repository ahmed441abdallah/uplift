'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Circle } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Heading from '@/components/Heading';
import PricingCards from '@/components/pricingcards';

const Services = () => {
    const skills = [
        { name: "Architectural Design", percentage: 90 },
        { name: "Engineering Services", percentage: 85 },
        { name: "Interior Design", percentage: 95 },
        { name: "Building Restoration", percentage: 82 },
    ];

    const services = [
        {
            title: "Turnkey Projects",
            image: "https://images.unsplash.com/photo-1709418440123-270070054fb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            description: "Eco-friendly architectural solutions",
        },
        {
            title: "Full Fit-Out Projects",
            image: "https://images.unsplash.com/photo-1709418440119-96055db3d645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
            description: "Transform existing spaces",
        },
        {
            title: "Interior Design & Execution",
            image: "https://images.unsplash.com/photo-1709418440197-fb76ad8dd8a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
            description: "Bespoke building solutions",
        },
        {
            title: "Bespoke Joinery Projects",
            image: "https://images.unsplash.com/photo-1709418440159-9958a213324e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
            description: "End-to-end oversight",
        },
        {
            title: "Design & Planning",
            image: "https://media.istockphoto.com/id/1151345191/photo/relax-work-station-in-the-garden.webp?a=1&s=612x612&w=0&k=20&c=JcN2jFDhxsps-v4lLzBqnR8RkUQ_jAgJusMrj8D9RqI=",
            description: "Comprehensive architectural design",
        },
        {
            title: "Project Management ",
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
        <div className='text-white'>
            <Heading text='Our Services' url='https://cdn.pixabay.com/video/2024/02/20/201281-915375202_large.mp4' />

            <section className="container mx-auto px-4 py-16">
                <div className="text-gray-200 leading-relaxed space-y-4 mb-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
                    <p><strong className='text-3xl font-medium'>Turnkey Projects</strong><br />
                        UPLIFT provides comprehensive turnkey solutions, managing every aspect of your project from initial concept to final handover. Our team takes care of design, sourcing, project management, and execution, ensuring a seamless process and a fully completed space that’s ready to use.</p>

                    <p><strong className='text-3xl font-medium'>Design Services</strong><br />
                        Our design services are tailored to create unique, inspired spaces that reflect your vision. From concept development and space planning to detailed design layouts, we work closely with clients to bring their ideas to life with creativity, precision, and attention to detail.</p>

                    <p><strong className='text-3xl font-medium'>Project Management Services</strong><br />
                        We understand that effective project management is essential for a successful outcome. Our experienced project managers oversee every detail, coordinating teams and resources to ensure projects are delivered on time, within budget, and to the highest standards.</p>

                    <p><strong className='text-3xl font-medium'>Fit-Out Projects</strong><br />
                        Our fit-out services are designed to transform spaces into fully functional, stylish interiors. We handle all aspects of the fit-out process, from layout adjustments and finishes to furnishings, creating cohesive spaces that meet both aesthetic and practical needs.</p>

                    <p><strong className='text-3xl font-medium'>Bespoke Joinery Projects</strong><br />
                        UPLIFT specializes in bespoke joinery solutions that add a personalized touch to your space. Our craftsmen work with high-quality materials to create custom cabinetry, furniture, and woodwork tailored to fit seamlessly into your interior design, blending beauty with functionality.</p>
                    <p><strong className='text-3xl font-medium'>Sustainable Design Solutions
                    </strong><br />
                        Our sustainable design solutions focus on creating energy-efficient and eco-friendly buildings that not only reduce environmental impact but also promote healthier living and working spaces. From incorporating renewable energy sources and water-saving systems to using sustainable materials.</p>
                </div>

                <div className="max-w-2xl mx-auto text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }} // Always animate to visible
                        transition={{ duration: 1 }} // Immediate fade in
                        className="text-3xl md:text-4xl font-medium leading-tight"
                    >
                        Architects excited about beauty, affordability, and sustainability.
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
            <PricingCards />

            {/* Skills section */}
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
                            Our expertise includes architecture, planning, structural engineering, interior design, sustainable design, building restoration, and construction services.
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
                                <h4 className="text-xl font-medium text-gray-300">{skill.name}</h4>
                                <div className="h-1 bg-gray-400">
                                    <div
                                        className="h-full bg-white"
                                        style={{ width: `${skill.percentage}%` }}
                                    />
                                </div>
                                <p className="text-gray-400 text-sm mt-2">{skill.percentage}% Expertise</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
