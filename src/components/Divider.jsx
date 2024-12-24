import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SERVICES = [
    {
        id: 1,
        title: 'art space',
        image: 'https://images.pexels.com/photos/1633970/pexels-photo-1633970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        id: 2,
        title: 'Fit-Out',
        image: "https://images.pexels.com/photos/774548/pexels-photo-774548.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 3,
        title: 'interior design',
        image: "https://images.pexels.com/photos/1143416/pexels-photo-1143416.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 4,
        title: 'architecture',
        image: "https://images.pexels.com/photos/534174/pexels-photo-534174.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

const Divider = () => {
    return (
        <div>
            <section className='grid grid-cols-1 sm:grid-cols-2'>
                {
                    SERVICES.map(service => (
                        <div
                            key={service.id}
                            className={`group text-primary p-8 px-12 border-b border-r transition-all duration-500 ease-in-out relative overflow-hidden`}
                        >
                            <div
                                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100`}
                                style={{ backgroundImage: `url(${service.image})` }}
                            ></div>
                            <div className='flex items-center justify-between relative z-10'>
                                <h1 className='text-5xl uppercase'>{service.title}</h1>
                                <p className='text-[80px] sm:text-[160px] font-thin'>0{service.id}</p>
                            </div>
                        </div>
                    ))
                }
            </section>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <Image
                                alt="random image"
                                src='https://tadao.qodeinteractive.com/wp-content/uploads/2023/04/h1-img-3.png'
                                className="absolute inset-0 h-full w-full object-cover"
                                width={500}
                                height={500}
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-4xl  sm:text-6xl uppercase  tracking-wide text-primary">start with idea
                            </h2>

                            <p className="mt-4 text-gray-200 tracking-normal leading-6">
                                Uncover the potential of every room with our all-in-one interior design platform. Whether you are refreshing a single room or styling an entire home, you’ll find tailored inspiration, practical tools, and expert advice to guide you every step of the way. Start building your dream home today.
                            </p>

                            <Link
                                href="/projects"
                                className="mt-8 inline-block rounded bg-white text-black px-12 py-3 text-sm font-medium  transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Divider;
