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

export function ProjectsSlider() {
    return (
        <Carousel className="w-full sm:w-[90%] mx-auto">
            <h1 className="text-primary text-5xl text-center mb-2">Featured Projects</h1>
            <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className=" bg-transparent">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <div className="flex flex-col">
                                        <div>
                                            <Image
                                                src="https://tadao.qodeinteractive.com/wp-content/uploads/2023/05/blog-img-4.jpg"
                                                alt="project"
                                                width={600}
                                                height={600}
                                                className="w-full hover:scale-105 transition-all duration-500"
                                            />
                                        </div>
                                        <div className="flex gap-8">
                                            <div className="text-primary mt-4">
                                                <div className="size-12 bg-gray-500 flex justify-center items-center">
                                                    <h1 className="text-xl">1 May</h1>
                                                </div>
                                            </div>
                                            <div className="text-primary mt-4">
                                                <p className="text-gray-300 leading-6 tracking-widest">
                                                    Juliette Manon | Building
                                                </p>
                                                <h2 className="text-3xl font-medium uppercase">
                                                    Start with the view & air
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='hidden sm:block' />
            <CarouselNext className='hidden sm:block' />
        </Carousel>
    )
}
