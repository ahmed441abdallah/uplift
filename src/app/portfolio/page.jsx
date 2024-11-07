'use client';
import Heading from '@/components/Heading'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Portfolio = () => {
    const PORTFOLIO = [
        {
            id: 1,
            image: 'https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg',
        },
        {
            id: 2,
            image: 'https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg',
        },
        {
            id: 3,
            image: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_640.jpg',
        },
        {
            id: 4,
            image: 'https://cdn.pixabay.com/photo/2016/11/22/23/38/apartment-1851201_640.jpg',
        },
        {
            id: 5,
            image: 'https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_640.jpg',
        },
        {
            id: 6,
            image: 'https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_640.jpg',
        },
        {
            id: 7,
            image: 'https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_640.jpg',
        },
        {
            id: 8,
            image: 'https://cdn.pixabay.com/photo/2016/08/26/15/06/home-1622401_640.jpg',
        },
    ];
    const hoverEffect = {
        initial: { scale: 1, opacity: 1 },
        hover: { scale: 1.05, opacity: 0.9 }
    };

    return (
        <div>
            <Heading text='Portfolio' url='https://cdn.pixabay.com/video/2024/02/25/201947-916877801_large.mp4' />
            <section className="text-white mt-4 p-4">
                <div className="flex items-center">
                    <h1 className="text-2xl flex-1">Interior design ideas</h1>
                    <button className="text-black px-6 rounded-md py-1 bg-white">Explore</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 mt-2 gap-4">
                    {PORTFOLIO.map((portfolio) => (
                        <motion.div
                            key={portfolio.id}
                            className="p-2"
                            initial="initial"
                            whileHover="hover"
                            variants={hoverEffect}
                        >
                            <Image
                                width={400}
                                height={350}
                                src={portfolio.image}
                                alt="portfolio image"
                                className="w-full h-[350px] object-cover rounded-md"
                                quality={75}
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            <section>
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl text-white mb-8">Architecture and more</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                            <Image
                                width={400}
                                height={400}
                                src="https://cdn.pixabay.com/photo/2020/04/23/18/41/light-5083606_1280.jpg"
                                alt="Nature"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4">
                                    <h3 className="text-3xl text-white">Explore Nature</h3>
                                    <p className="text-white">Discover the beauty of the natural world</p>
                                </div>
                            </div>
                        </div>
                        {/* Additional Images with Hover Effects */}
                        {[
                            {
                                src: 'https://cdn.pixabay.com/photo/2015/09/21/21/51/architecture-950791_640.jpg',
                                title: 'Interior Design',
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/07/26/11/21/split-5439195_640.jpg',
                                title: 'Architecture',
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2022/04/09/13/35/living-room-7121425_640.jpg',
                                title: '3D Modeling',
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2024/01/11/13/55/living-room-8501757_640.jpg',
                                title: 'Artistic Expressions',
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2021/12/25/13/11/living-room-6893089_640.jpg',
                                title: 'Living Room',
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2023/11/21/12/31/living-room-8403277_640.jpg',
                                title: 'Indoor',
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/03/03/04/12/apartment-4897464_640.jpg',
                                title: 'Kitchen',
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2023/10/18/11/20/building-8323951_640.jpg',
                                title: 'Master',
                            }
                        ].map((item, index) => (
                            <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg group">
                                <Image
                                    width={400}
                                    height={300}
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h4 className="text-3xl text-white">{item.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
                {[
                    'https://cdn.pixabay.com/photo/2021/12/25/13/09/living-room-6893062_640.jpg',
                    'https://cdn.pixabay.com/photo/2016/11/22/19/11/brick-wall-1850095_640.jpg',
                    'https://cdn.pixabay.com/photo/2021/12/25/13/11/living-room-6893089_640.jpg',
                    'https://cdn.pixabay.com/photo/2022/04/09/13/35/living-room-7121425_640.jpg',
                    'https://cdn.pixabay.com/photo/2024/09/25/13/35/living-room-9073734_640.jpg',
                    'https://cdn.pixabay.com/photo/2019/05/24/11/00/interior-4226020_640.jpg',
                    'https://cdn.pixabay.com/photo/2021/12/25/13/08/real-estate-6893060_640.jpg',
                    'https://cdn.pixabay.com/photo/2020/08/28/06/13/building-5523630_640.jpg',
                    'https://cdn.pixabay.com/photo/2017/08/01/09/02/house-2563735_640.jpg',
                    'https://cdn.pixabay.com/photo/2024/01/11/13/55/living-room-8501757_640.jpg',
                    'https://cdn.pixabay.com/photo/2024/01/29/08/21/living-room-8539237_640.jpg',
                    "https://cdn.pixabay.com/photo/2018/01/22/08/55/modern-minimalist-kitchen-3098477_1280.jpg",
                ].map((src, index) => (
                    <div key={index} className="grid gap-4">
                        <Image
                            width={400}
                            height={300}
                            className="h-auto max-w-full rounded-lg"
                            src={src}
                            alt="portfolio"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
