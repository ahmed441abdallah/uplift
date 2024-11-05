import Image from 'next/image'
import React from 'react'

const NewArrival = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h2 className="text-xl font-medium text-white sm:text-5xl">New Arrival</h2>

                    <p className="mx-auto mt-4 max-w-md text-gray-300">
                        Our mission is to help you imagine your own empire by bringing  to you inspiring ideas for your properties. We create realistic visuals of elegant designs that directs
                    </p>
                </header>

                <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <li>
                        <a href="#" className="group relative block">
                            <img
                                src='https://images.unsplash.com/photo-1711419181219-cdebc7f3b2ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D'
                                alt=""
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white"> Details </h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
                                    Explore Now
                                </span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="group relative block">
                            <img
                                src='https://images.unsplash.com/photo-1709418440553-289bf9f1ef80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8'
                                alt=""
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">Serenity</h3>

                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
                                    Explore Now
                                </span>
                            </div>
                        </a>
                    </li>

                    <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <a href="#" className="group relative block">
                            <Image
                                width={500}
                                height={500}
                                src='https://images.unsplash.com/photo-1709418440165-b719621dea31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D'
                                alt="hero3"
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                            />

                            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                <h3 className="text-xl font-medium text-white">Spatial Planning
                                </h3>
                                <span
                                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                                >
                                    Explore Now
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default NewArrival