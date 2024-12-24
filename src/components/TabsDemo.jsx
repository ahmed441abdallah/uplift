"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function TabsDemo() {
    const tabs = [
        {
            title: "COMMERCIAL",
            value: "COMMERCIAL",
            content: (
                <div
                    className="w-full h-full overflow-hidden relative  rounded-2xl p-10 text-xl md:text-4xl  font-medium text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
                    <p>COMMERCIAL</p>
                    <DummyContent img="https://i.postimg.cc/8c0SMDfK/Majlis-Umm-Suqeim-Villa-Presentation-v02.jpg" />
                </div>
            ),
        },
        {
            title: "FOOD & BEVERAGE",
            value: "food",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-medium text-white bg-gradient-to-br from-zinc-700 to-zinc-900 ">
                    <p>FOOD & BEVERAGE</p>
                    <DummyContent img="https://i.postimg.cc/3JTWxFCP/02-copy.jpg" />
                </div>
            ),
        },
        {
            title: "RETAIL",
            value: "retail",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl  font-medium text-white bg-gradient-to-br from-zinc-700 to-zinc-900 ">
                    <p>RETAIL</p>
                    <DummyContent img="https://bodesstudio.com/wp-content/uploads/2024/03/1cf5b91193554153.65ee0280e893a.jpg" />
                </div>
            ),
        },
        {
            title: "CORPORATE",
            value: "corporate",
            content: (
                <div
                    className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl  font-medium text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
                    <p>CORPORATE</p>
                    <DummyContent img="https://i.postimg.cc/TYtyNWgF/01.jpg" />
                </div>
            ),
        },

    ];

    return (
        (<div
            className="h-[30rem] md:h-[50rem] [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-24">
            <h1 className=" text-xl sm:text-4xl font-medium mb-2 p-2 ">Projects category</h1>
            <Tabs tabs={tabs} />
        </div>)
    );
}

const DummyContent = ({ img }) => {
    return (
        (<Image
            src={img}
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover w-full h-full p-2 rounded-2xl mx-auto" />)
    );
};
