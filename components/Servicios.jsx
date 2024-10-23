'use client'

import Image from 'next/image'
import Swal from 'sweetalert2'


function handleShow(material) {
    if(material === 'PEAD') {
        Swal.fire({
        title: 'Polietileno de Alta Densidad',
        text: 'El polietileno de alta densidad (PEAD) es un polímero termoplástico de alta resistencia y dureza, con una alta resistencia química y a la abrasión. Es un material muy versátil, con una amplia gama de aplicaciones en la industria, la construcción y el hogar. En Dali Termoplásticos procesamos PEAD de alta calidad, reciclado y virgen, para satisfacer las necesidades de nuestros clientes.',
        icon: 'info',
        confirmButtonText: 'Cerrar',
        customClass: {
            popup: 'swal-popup',
            title: 'swal-title',
            content: 'swal-content',
            confirmButton: 'swal-confirm-button'
        }
    });
}
    if(material === 'PEBD') {
        Swal.fire({
            title: 'Polietileno de Baja Densidad',
            text: 'El polietileno de baja densidad (PEBD) es un polímero termoplástico de baja densidad, con una alta resistencia a la tracción y a la flexión. Es un material muy versátil, con una amplia gama de aplicaciones en la industria, la construcción y el hogar. En Dali Termoplásticos procesamos PEBD de alta calidad, reciclado y virgen, para satisfacer las necesidades de nuestros clientes.',
            icon: 'info',
        confirmButtonText: 'Cerrar',
        customClass: {
            popup: 'swal-popup',
            title: 'swal-title',
            content: 'swal-content',
            confirmButton: 'swal-confirm-button'
        }
        });
    }
    if(material === 'PP') {
        Swal.fire({
            title: 'Polipropileno',
            text: 'El polipropileno (PP) es un polímero termoplástico de alta resistencia y dureza, con una alta resistencia química y a la abrasión. Es un material muy versátil, con una amplia gama de aplicaciones en la industria, la construcción y el hogar. En Dali Termoplásticos procesamos PP de alta calidad, reciclado y virgen, para satisfacer las necesidades de nuestros clientes.',
            icon: 'info',
            confirmButtonText: 'Cerrar',
            customClass: {
                popup: 'swal-popup',
                title: 'swal-title',
                content: 'swal-content',
                confirmButton: 'swal-confirm-button'
            }
        });
    }
}

const Servicios = () => {
    return (
        <div className='w-full h-full flex flex-col items-center'>
            <h1 className='flex justify-center text-center font-museo text-4xl md:hidden'>¿Qué polímeros procesamos?</h1>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <p className='w-[90%] mx-auto pt-4 text-sm text-center md:text-left md:py-6 md:text-base lg:text-xl xl:text-2xl'>Haga click sobre los materiales para ver de que se trata</p>
                <div className='flex flex-col items-center justify-center gap-8 mt-4 mb-16 sm:w-[90%] sm:gap-4 md:w-[80%] md:mt-0 lg:w-[95%]'>
                    <div className='text-center text-fepGreen font-museo text-lg cursor-pointer transform transition duration-500 hover:scale-110 xl:text-2xl'>
                        <div className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] xl:w-[280px] xl:h-[280px] my-2 rounded-3xl relative' onClick={() => handleShow("PEAD")}>
                            <Image alt='Polietileno Alta Densidad' src='/servicios/PEAD.png' fill sizes='h-full' className='object-contain rounded-3xl' />
                        </div>
                    </div>
                    <div className='text-center text-fepGreen font-museo text-lg cursor-pointer transform transition duration-500 hover:scale-110 xl:text-2xl'>
                        <div className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] xl:w-[280px] xl:h-[280px] my-2 rounded-3xl relative' onClick={() => handleShow("PEBD")}>
                            <Image alt='Polietileno Baja Densidad' src='/servicios/PEBD.png' fill sizes='h-full' className='object-contain rounded-3xl' />
                        </div>
                    </div>
                    <div className='text-center text-fepGreen font-museo text-lg cursor-pointer transform transition duration-500 hover:scale-110 xl:text-2xl'>
                        <div className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] xl:w-[280px] xl:h-[280px] my-2 rounded-3xl relative' >
                            <Image alt='Polipropileno' src='/servicios/PP.png' fill sizes='h-full' className='object-contain rounded-3xl' onClick={() => handleShow("PP")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )};
export default Servicios