"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "./container-scroll-animation";

export function HeroScrollDemo() {
    return (
        (<div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-6xl  text-white">
                            Unleash the power of <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                Interior Design
                            </span>
                        </h1>
                    </>
                }>
                <Image
                    alt="villa"
                    src="https://cdn.sanity.io/images/nukkh59q/production/e32616e75549381b92021b01250269af04d9043b-1759x1173.jpg?crop=&hotspot=&w=1280&h=854&auto=format"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full w-full"
                    draggable={false} />
            </ContainerScroll>
        </div>)
    );
}
