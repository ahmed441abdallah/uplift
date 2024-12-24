'use client';
import Heading from '@/components/Heading';
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Faq = () => {
    const questions = [
        {
            question: 'What type of projects that Uplift specialized in?',
            answer: 'Uplift specializes in a wide range of projects, including residential, commercial, and public architecture. Our expertise covers everything from single-family homes and office buildings to educational institutions and cultural centers.'
        },
        {
            question: 'How does Uplift work?',
            answer: 'We strongly believe in a collaborative approach. We encourage our clients to be actively involved in the design process, as your input and vision are crucial in creating a space that reflects your needs and aspirations. We work closely with you to understand your preferences and incorporate them into the design.'
        },
        {
            question: 'How do I get started?',
            answer: 'We understand the importance of adhering to budgetary and timeline constraints. Our architects carefully plan and manage each project, considering factors such as cost estimation.'
        },
        {
            question: 'What is Uplift?',
            answer: 'Uplift is a platform that connects you with the best interior designers and architects to help you design your dream home.'
        }, {
            question: 'What is the cost of Uplift services?',
            answer: 'The cost of our services varies depending on the scope and complexity of the project. We offer a range of packages to suit different budgets and requirements. Contact us for a free consultation to discuss your project and get a quote.'
        }, {
            question: 'What makes Uplift different from other design services?',
            answer: 'Uplift is committed to providing high-quality design services that are tailored to your needs. Our team of experienced architects and interior designers will work closely with you to create a space that reflects your style and personality. We take pride in our attention to detail and commitment to excellence.'
        }
    ]

    return (
        <div className=" text-white">
            <Heading text="FAQ " url="https://cdn.pixabay.com/video/2024/06/01/214888_tiny.mp4" />

            <section className='p-6 sm:p-32'>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h2 className="text-2xl font-medium sm:text-4xl">
                            Frequently Asked Questions (FAQ) about Uplift and our services
                        </h2>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
                        <div>
                            <Image
                                alt="faq"
                                width={600}
                                height={400}
                                className="w-full h-[400px] sm:h-[600px] object-cover rounded-xl"
                                src="https://cdn.pixabay.com/photo/2024/03/26/18/56/interior-design-8657614_640.png"
                            />
                        </div>
                        <div className="space-y-4">
                            {questions.map((question, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-[#131313] p-4 text-gray-300"
                                        >
                                            <h2 className="font-medium">{question.question}</h2>

                                            <motion.svg
                                                className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                initial={{ rotate: 0 }}
                                                animate={{ rotate: 180 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </motion.svg>
                                        </summary>

                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-4 px-4 leading-relaxed text-gray-200"
                                        >
                                            {question.answer}
                                        </motion.p>
                                    </details>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faq
