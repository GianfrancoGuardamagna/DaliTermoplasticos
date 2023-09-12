'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import { MdNavigateNext, MdNavigateBefore, MdClose } from 'react-icons/md'
/* import '../scrollbar.css' */


const Productos = ({ products }) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const prevImage = () => {
        setSelectedImageIndex((prevIndex) => prevIndex === 0 ? products.length - 1 : prevIndex - 1)
    }

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) => prevIndex === products.length - 1 ? 0 : prevIndex + 1)
    }

    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        if (modalOpen) {
            window.addEventListener('keydown', handleEscapeKey);
        }

        return () => {
            window.removeEventListener('keydown', handleEscapeKey);
        };
    }, [modalOpen]);

    return (

        <section className='min-h-[calc(100vh-192px)] md:min-h-[calc(100vh-152px)]'>
            <div className="w-[85%] mx-auto py-8 md:py-16 flex flex-wrap justify-center md:justify-center items-start gap-4">
                {products.map((product, index) => (
                    <div key={index} className='w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] cursor-pointer relative' onClick={() => openModal(index)}>
                        <Image src={product.image} alt={product.title} fill sizes='w-full' className="rounded-3xl object-cover object-center" />
                    </div>
                ))}
            </div>
            {modalOpen && (
                <div className="fixed top-[112px] left-0 w-screen h-screen flex justify-center bg-black bg-opacity-80">
                    <div className="bg-white h-[65%] lg:h-[75%] mt-6 p-4 rounded-lg overflow-hidden w-[90%] sm:w-[90%] md:w-[60%]">
                        <div className="h-full flex flex-col justify-between">
                            <div className="w-full flex justify-end text-fepGreen" >
                                <MdClose size={50} onClick={closeModal} />
                            </div>
                            <div className="relative w-full h-[60%] md:h-[80%] mx-auto">
                                <Image
                                    src={products[selectedImageIndex].image}
                                    alt={products[selectedImageIndex].title}
                                    fill
                                    sizes="w-full"
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-center mt-2 font-museo text-xl lg:text-2xl">{products[selectedImageIndex].title}</p>
                            <div className="w-full flex justify-center gap-10 text-fepGreen">
                                <MdNavigateBefore size={60} onClick={prevImage} />
                                <MdNavigateNext size={60} onClick={nextImage} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </section>


    )
}

export default Productos