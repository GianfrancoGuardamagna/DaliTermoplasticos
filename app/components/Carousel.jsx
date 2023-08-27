'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

const Carousel = () => {
    const carouselImages = ['/carousel/c-img1.png', '/carousel/c-img2.png', '/carousel/c-img3.png']
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Cambiar de imagen cada 5 segundos en la versión móvil

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='w-full md:w-[90%] h-[85%] md:mx-auto rounded-3xl relative md:flex md:justify-center bg-fepGreen'>

            <Image
                alt={`Image ${currentIndex}`}
                src={carouselImages[currentIndex]}
                fill={true}
                sizes='w-full'
                className='object-contain sm:object-cover sm:rounded-3xl'
            />

            <span
                onClick={handlePrev}
                className='hidden md:block md:absolute md:top-[calc(50%-30px)] md:-right-14 text-fepGreen'>
                <MdNavigateNext size={60} />
            </span>
            <span
                onClick={handlePrev}
                className='hidden md:block md:absolute md:top-[calc(50%-30px)] md:-left-14 text-fepGreen'>
                <MdNavigateBefore size={60} />
            </span>

            <div className='hidden md:absolute md:-bottom-6 md:flex md:gap-6'>
                {carouselImages.map((carouselImage, index) => {
                    return (
                        <div
                            onClick={() => { setCurrentIndex(index) }}
                            className={index === currentIndex ? 'w-4 h-4 rounded-full  bg-fepGreen' : 'w-4 h-4 rounded-full border-2 border-fepGreen'}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Carousel