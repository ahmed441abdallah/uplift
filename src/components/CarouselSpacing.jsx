import {
    Carousel,
    CarouselContent,
    CarouselNavigation,
    CarouselItem,
} from '@/components/carousel';
import Image from 'next/image';

export function CarouselSpacing() {
    return (
        <div className="relative w-full px-4 sm:px-20 overflow-hidden">
            <h2 className="text-primary text-5xl uppercase mb-2">read insights</h2>
            <p className="text-xl leading-6 tracking-widest capitalize text-gray-300 mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse.
            </p>
            <Carousel>
                <CarouselContent className="flex -ml-4">
                    {Array.from({ length: 7 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-full sm:basis-1/3 pl-4">
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
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNavigation
                    className="absolute -bottom-10 left-auto top-auto w-full justify-end gap-2"
                    classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
                    alwaysShow
                />
            </Carousel>
        </div>
    );
}

