"use client"
import { useState } from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import Category from "./category"

export default function ArchitectureFeatures() {
    const [openSection, setOpenSection] = useState("turnkey-projects")

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 items-center gap-2">
                <Image
                    width={400}
                    height={400}
                    src="https://cdn.pixabay.com/photo/2022/04/13/13/56/old-building-7130386_640.jpg"
                    alt="Modern architectural building"
                    className="h-[500px] w-[500px] object-cover rounded-lg shadow-lg "
                />
                {/* Content */}
                <div className="space-y-8">
                    <h2 className="text-4xl font-medium text-white">Our Comprehensive Services</h2>
                    <Accordion type="single" collapsible value={openSection} onValueChange={setOpenSection}>

                        <AccordionItem value="turnkey-projects" className="border-t border-gray-200">
                            <AccordionTrigger className="text-sm tracking-widest text-gray-400 hover:no-underline">
                                TURNKEY PROJECTS
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600 leading-relaxed">
                                    UPLIFT provides comprehensive turnkey solutions, managing every aspect of your project from initial concept to final handover. Our team takes care of design, sourcing, project management, and execution, ensuring a seamless process and a fully completed space that’s ready to use.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="design-services" className="border-t border-gray-200">
                            <AccordionTrigger className="text-sm tracking-widest text-gray-400 hover:no-underline">
                                DESIGN SERVICES
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600 leading-relaxed">
                                    Our design services are tailored to create unique, inspired spaces that reflect your vision. From concept development and space planning to detailed design layouts, we work closely with clients to bring their ideas to life with creativity, precision, and attention to detail.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="project-management" className="border-t border-gray-200">
                            <AccordionTrigger className="text-sm tracking-widest text-gray-400 hover:no-underline">
                                PROJECT MANAGEMENT SERVICES
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600 leading-relaxed">
                                    We understand that effective project management is essential for a successful outcome. Our experienced project managers oversee every detail, coordinating teams and resources to ensure projects are delivered on time, within budget, and to the highest standards.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="fit-out-projects" className="border-t border-gray-200">
                            <AccordionTrigger className="text-sm tracking-widest text-gray-400 hover:no-underline">
                                FIT-OUT PROJECTS
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600 leading-relaxed">
                                    Our fit-out services are designed to transform spaces into fully functional, stylish interiors. We handle all aspects of the fit-out process, from layout adjustments and finishes to furnishings, creating cohesive spaces that meet both aesthetic and practical needs.
                                </p>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="bespoke-joinery" className="border-t border-gray-200">
                            <AccordionTrigger className="text-sm tracking-widest text-gray-400 hover:no-underline">
                                BESPOKE JOINERY PROJECTS
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-600 leading-relaxed">
                                    UPLIFT specializes in bespoke joinery solutions that add a personalized touch to your space. Our craftsmen work with high-quality materials to create custom cabinetry, furniture, and woodwork tailored to fit seamlessly into your interior design, blending beauty with functionality.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <Category />
        </div>
    )
}
