'use client'
import Image from "next/image"
import { useState } from "react"
import { MdNavigateNext, MdNavigateBefore, MdClose } from 'react-icons/md'
/* import '../scrollbar.css' */


const Productos = () => {
    const products = [
        {
            title: 'Producto 1',
            image: '/carousel/c-img3.png'
        },
        {
            title: 'Producto 2',
            image: '/carousel/c-img2.png'
        },
        {
            title: 'Producto 3',
            image: '/carousel/c-img1.png'
        },
        {
            title: 'Producto 4',
            image: '/carousel/c-img3.png'
        },
        {
            title: 'Producto 5',
            image: '/carousel/c-img2.png'
        },
        {
            title: 'Producto 6',
            image: '/carousel/c-img1.png'
        }
    ]
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

    return (
        <div className='w-full h-full flex flex-col'>
            <h1 className='flex justify-center font-museo text-4xl pt-4 md:hidden'>Productos</h1>

            <div className="w-[80%] h-[80%] md:h-auto mx-auto my-4 md:my-16 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-scroll">
                {products.map((product, index) => (
                    <div key={index} className='w-full h-[200px] cursor-pointer relative' onClick={() => openModal(index)}>
                        <Image src={product.image} alt={product.title} fill sizes='w-full' className="rounded-3xl object-cover object-center" />
                    </div>
                ))}
            </div>
            {modalOpen && (
                <div className="fixed top-[112px] lest-0 w-screen h-screen flex justify-center bg-black bg-opacity-80">
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



        </div>
    )
}

export default Productos