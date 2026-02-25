import React, { useState, useEffect } from 'react'

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            id: 1,
            image: '/assets/First.png',
            title: 'Nature - Inspired',
            subtitle: 'ELEVATE YOUR PRATICE',
            description: 'Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.'
        },
        {
            id: 2,
            image: '/assets/Second.png',
            title: 'Nature - Inspired',
            subtitle: 'ELEVATE YOUR PRATICE',
            description: 'Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.'
        },
        {
            id: 3,
            image: '/assets/Third.png',
            title: 'Nature - Inspired',
            subtitle: 'ELEVATE YOUR PRATICE',
            description: 'Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.'
        },
        {
            id: 4,
            image: '/assets/Fourth.jpg',
            title: 'Nature - Inspired',
            subtitle: 'ELEVATE YOUR PRATICE',
            description: 'Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.'
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [slides.length])



    return (

        <div className=' w-full h-screen '>
            <div className='relative w-full '>
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`z-10 bg-cover bg-center absolute w-full h-screen transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ backgroundImage: `url('${slide.image}')` }}
                    >
                        <div
                            className='absolute inset-0 z-0'
                            style={{ background: 'linear-gradient(90.64deg, rgba(0, 0, 0, 0.65) 5.47%, rgba(0, 0, 0, 0) 95.31%)' }}
                        />
                        <div className='relative z-20 text-white h-full flex flex-col items-start justify-center lg:px-35 px-5'>
                            <h1 className='tracking-widest text-xs sm:text-sm md:text-base lg:text-lg font-normal'>{slide.subtitle}</h1>
                            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mt-2 sm:mt-3 md:mt-4'>{slide.title}</h1>
                            <h1 className='font-normal text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mt-3 sm:mt-4 md:mt-5 leading-relaxed'>
                                {slide.description}
                            </h1>
                            <button className='bg-[#01C6B5] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 text-sm sm:text-base md:text-lg font-medium mt-6 sm:mt-8 md:mt-10 hover:bg-[#00b39a] transition-colors'>Shop now</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Hero