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
                    src="https://tadao.qodeinteractive.com/wp-content/uploads/2023/04/port-custom-3-gallery-img-5.jpg"
                    height={720}
                    width={1400}
                    className="mx-auto  object-cover h-full w-full"
                    draggable={false} />
            </ContainerScroll>
        </div>)
    );
}
