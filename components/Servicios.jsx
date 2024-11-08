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
            text: 'El polietileno de baja densidad (PEBD) es un polímero termoplástico de baja densidad, con una alta resistencia a la tracción y a la flexión. Es un material muy versátil, con multiples útilidades en la industria. En Dali Termoplásticos procesamos PEBD de alta calidad, reciclado y virgen, para satisfacer las necesidades de nuestros clientes.',
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
            text: 'El polipropileno (PP) es un polímero termoplástico de alta resistencia y dureza, con una alta resistencia química y a la abrasión. Es un material muy versátil, conocido por su resistencia a la fatiga y su capacidad para soportar temperaturas elevadas. En Dali Termoplásticos procesamos PP de alta calidad, reciclado y virgen, para satisfacer las necesidades de nuestros clientes.',
            icon: 'info',
            confirmButtonText: 'Cerrar',
            customClass: {
                popup: 'swal-popup',
                title: 'swal-title',
                content: 'swal-content',
                confirmButton: 'swal-confirm-button'
            }
        });
    }if(material === 'compra') {
        Swal.fire({
            title: 'Comprar Material',
            text: 'Si deseas saber los precios de nuestros productos y servicios, por favor contáctanos a través de nuestro formulario de contacto o a través de nuestro número de teléfono 223 599-9980. <br><br> Estaremos encantados de atenderte y ofrecerte la mejor solución para tus necesidades.',
            icon: 'info',
            confirmButtonText: 'Cerrar',
            customClass: {
                popup: 'swal-popup',
                title: 'swal-title',
                content: 'swal-content',
                confirmButton: 'swal-confirm-button'
            }
        });
    }if(material === 'venta') {
        Swal.fire({
            title: 'Vender Material',
            html: 'Si estás interesado en vendernos material plástico, las condiciones son las siguientes: <br><br> El material debe estar limpio y seco. <br><br> En lo posible, el material debe estar separado por tipo y color. <br><br> El material debe estar libre de contaminantes. <br><br> Si cumples con estas condiciones, por favor contáctanos para coordinar la recolección del material. Si cumples alguna de estas condiciones, por favor contáctanos para saber más.',
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
        <div className='w-full flex flex-col items-center xl:pt-6 xl:justify-center xl:bg-slate-200 xl:shadow-inner'>
            <h1 className='flex justify-center text-center font-museo text-4xl'>¿Qué polímeros procesamos?</h1>
            <div className='w-full flex flex-col justify-center items-center'>
                <p className='w-[90%] mx-auto pt-4 text-sm text-center md:py-4 md:text-base lg:text-xl xl:text-2xl'>Haga click sobre los materiales para ver de qué se trata</p>
                <div className='flex flex-col xl:flex-row items-center justify-center gap-8 mt-4 mb-16 xl:m-0 sm:w-[90%] sm:gap-24 md:w-[80%] lg:w-[95%]'>
                    <div className='text-center text-fepGreen font-museo text-lg cursor-pointer transform transition duration-500 hover:scale-110 xl:text-2xl'>
                        <div className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] xl:w-[280px] xl:h-[280px] my-2 rounded-3xl' onClick={() => handleShow("PEAD")}>
                            <Image alt='Polietileno Alta Densidad' src='/servicios/PEAD.png' width={250} height={250} className='object-contain rounded-3xl' />
                        </div>
                    </div>
                    <div className='text-center text-fepGreen font-museo text-lg cursor-pointer transform transition duration-500 hover:scale-110 xl:text-2xl'>
                        <div className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] xl:w-[280px] xl:h-[280px] my-2 rounded-3xl' onClick={() => handleShow("PEBD")}>
                            <Image alt='Polietileno Baja Densidad' src='/servicios/PEBD.png' width={250} height={250} className='object-contain rounded-3xl' />
                        </div>
                    </div>
                    <div className='text-center text-fepGreen font-museo text-lg cursor-pointer transform transition duration-500 hover:scale-110 xl:text-2xl'>
                        <div className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] xl:w-[280px] xl:h-[280px] my-2 rounded-3xl' >
                            <Image alt='Polipropileno' src='/servicios/PP.png' width={250} height={250} className='object-contain rounded-3xl' onClick={() => handleShow("PP")} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 md:flex-row md:w-full md:justify-around xl:justify-center md:px-28 xl:py-8 xl:pb-12 2xl:w-2/3 xl:gap-24'>
                    <button className='bg-fepGreen text-white font-museo text-lg md:text-2xl py-2 md:py-4 px-4 md:px-8 rounded-lg transform transition duration-500 hover:scale-110' onClick={()=> handleShow("venta")}>Quiero Vender</button>
                    <button className='bg-fepGreen text-white font-museo text-lg md:text-2xl py-2 md:py-4 px-4 md:px-8 rounded-lg transform transition duration-500 hover:scale-110' onClick={()=> handleShow("compra")} >Quiero Comprar</button>
                </div>
            </div>
        </div>
    )};
export default Servicios