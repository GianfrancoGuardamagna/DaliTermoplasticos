'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md'

const Carousel = () => {

    const carouselImages = ['/carousel/carousel_1.png', '/carousel/carousel_2.png', '/carousel/carousel_3.png'];
    const carouselImagesSm = ['/carousel/sm_carousel_1.png', '/carousel/sm_carousel_2.png', '/carousel/sm_carousel_3.png']

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


    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        setWindowWidth(window.innerWidth);
        // Clean up the listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const useSmImages = windowWidth >= 640; // Adjust the breakpoint as needed

    const imagesArray = useSmImages ? carouselImagesSm : carouselImages;


    return (
        <div className='w-full h-[90%] md:h-[85%] relative md:flex md:justify-center'>

            <Image
                alt={`Image ${currentIndex}`}
                src={imagesArray[currentIndex]}
                fill={true}
                sizes='h-full'
                className='object-contain md:object-cover'
            />

            <span
                onClick={handlePrev}
                className='hidden md:block md:z-10 md:absolute md:top-[calc(50%-30px)] md:right-2 text-fepGreen'>
                <MdNavigateNext size={90} />
            </span>
            <span
                onClick={handlePrev}
                className='hidden md:block md:absolute md:top-[calc(50%-30px)] md:left-2 text-fepGreen'>
                <MdNavigateBefore size={90} />
            </span>

            <div className='hidden md:absolute md:-bottom-6 md:flex md:gap-6'>
                {imagesArray.map((carouselImage, index) => {
                    return (
                        <div
                            key={index}
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