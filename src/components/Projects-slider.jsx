'use client'
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { projectContext } from "../context/projectsContext.jsx";

export function ProjectsSlider() {
    const { projects } = React.useContext(projectContext);

    return (
        <Carousel className="w-full sm:w-[90%] mx-auto">
            <h1 className="text-primary text-5xl text-center mb-2">Featured Projects</h1>
            <CarouselContent className="-ml-1">
                {
                    projects.map(el => <CarouselItem key={el.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className=" bg-transparent">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <div className="flex flex-col">
                                        <div>
                                            <Image
                                                src={el.images[0]}
                                                alt="project"
                                                width={600}
                                                height={600}
                                                className=" hover:scale-105 transition-all duration-500 h-[400px] sm:w-[400px]"
                                            />
                                        </div>
                                        <div className="flex gap-8">
                                            <div className="text-primary mt-4">
                                                <div className="size-12 bg-gray-500 flex justify-center items-center">
                                                    <h1 className="text-xl">{el.id}</h1>
                                                </div>
                                            </div>
                                            <div className="text-primary mt-4">
                                                <p className="text-gray-300 leading-6 tracking-widest">
                                                    {el.type}
                                                </p>
                                                <h2 className="text-3xl font-medium uppercase">
                                                    {el.name}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>)
                }
            </CarouselContent>
            <CarouselPrevious className='hidden sm:block' />
            <CarouselNext className='hidden sm:block' />
        </Carousel>
    )
}
