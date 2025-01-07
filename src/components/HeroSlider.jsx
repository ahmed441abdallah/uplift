"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
    {
        image: "https://tadao.qodeinteractive.com/wp-content/uploads/2023/04/h2-port-img-1-1.jpg",
        title: "Unleash Your Creativity Design and Inspiration",
        subtitle: "Discover a world of design inspiration and practical tools that make transforming your space effortless, Whether you're planning a complete makeover or just looking for fresh ideas.",
    },
    {
        image: "https://i.postimg.cc/qvpkf3n2/Poliform-sofas-SAINT-GERMAIN-2024-01.webp",
        title: "EXPERIENCES & KNOWLEDGE INTEGRATED",
        subtitle: "Ready to turn your home into a space that reflects your unique style? Uplift combines inspiration, design tools, and expert advice to make interior design accessible and enjoyable.",
    },
    {
        image: "https://tadao.qodeinteractive.com/wp-content/uploads/2023/05/h8-port-slider-img-3.jpg",
        title: "INNOVATIVE ARCHITECTURAL SOLUTIONS",
        subtitle: "Designing your dream space has never been easier. Explore our curated collections by room, style, or color palette, and experiment with layouts using our interactive tools.",
    },
]

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <div
                        className={`absolute inset-0 bg-cover bg-center ${index === currentSlide ? "animate-zoom" : ""
                            }`}
                        style={{
                            backgroundImage: `url(${slide.image})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black/40" />
                    </div>

                    <div className="relative h-full flex items-center">
                        <div className="container mx-auto px-6">
                            <div className="max-w-3xl space-y-6">
                                <motion.h1
                                    className="text-4xl uppercase sm:text-8xl text-white tracking-wider leading-tight"
                                    initial={{ opacity: 0, x: 100 }} // Start from invisible and shifted to the right
                                    animate={index === currentSlide ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Fade in and move to the original position if current slide
                                    transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition with ease
                                >
                                    {slide.title}
                                </motion.h1>
                                <motion.p
                                    className="text-xl text-white/80 max-w-2xl"
                                    initial={{ opacity: 0, x: 100 }} // Same initial state for subtitle
                                    animate={index === currentSlide ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Fade in for the current slide
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Slight delay for subtitle with smooth transition
                                >
                                    {slide.subtitle}
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute hidden sm:block left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute hidden sm:block right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Progress Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 transition-all duration-300 ${index === currentSlide ? "w-8 bg-white" : "w-4 bg-white/50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}
