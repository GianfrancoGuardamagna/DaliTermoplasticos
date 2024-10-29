'use client'

import Image from 'next/image'
import BasicDemo from './torta'
import useWindowSize from '../hooks/windowSize.js'

const Sustentabilidad = () => {
    const size = useWindowSize()
    return (
        <div className='h-full flex flex-col justify-start items-center sm:bg-none bg-no-repeat bg-contain bg-right-bottom gap-6 pt-4'>
            <h1 className='pt-6 font-museo text-4xl lg:hidden'>Sustentabilidad</h1>
            <div className='h-full sm:flex sm:items-center gap-4 md:flex md:flex-col'>
            <div className='flex flex-col mx-auto w-full sm:w-[90%] gap-4 md:w-[95%] h-[calc(100vh-112px)] md:h-[calc(70vh-112px)] lg:h-[calc(100vh-112px)] md:flex-row-reverse md:items-center md:justify-center md:gap-6'>
                <div className="w-full md:w-1/2 h-[30%] my-2 md:h-[95%] lg:h-[80%] relative">
                    <Image alt='nosotros' src='/sustentabilidad/sustentabilidad_foto.jpg' fill sizes='h-full' className={` object-cover sm:rounded-xl`} />
                </div>
                <p className='text-center font-museo text-sm w-[90%] mx-auto sm:text-base md:w-1/2 md:text-start xl:text-2xl'>
                Mediante la reutilización de materiales plásticos, logramos minimizar el desperdicio industrial y reducir significativamente el consumo de recursos naturales, lo que no solo optimiza la eficiencia en sus líneas de producción, sino que también les permite ahorrar costos. Al optar por materia prima reciclada de alta calidad, nuestros clientes mejoran su competitividad en el mercado, alineándose con las crecientes demandas de sostenibilidad y responsabilidad ambiental.
                    Además, en nuestra planta contamos con sistemas de recirculación de agua a lo largo de todo el proceso productivo, lo que nos permite optimizar el uso de este recurso vital. Esta tecnología nos ayuda a reducir significativamente el consumo de agua, manteniendo altos estándares de eficiencia y minimizando el impacto ambiental. Además, implementamos un sistema de tratamiento de efluentes que nos permite reutilizar el agua en diferentes etapas del proceso, evitando la contaminación y garantizando la sostenibilidad de nuestras operaciones.
                </p>
            </div>
                <div className='flex flex-col gap-4 items-center justify-center lg:w-full lg:gap-8'>
                    <Image src='/sustentabilidad/sustentabilidad.png' className={size === 'isDesktop' ? 'hidden' : 'block' && size === 'isTablet' ? 'hidden' : 'block'} width={500} height={500}/>
                    <div className='flex flex-col items-center justify-center w-full'>
                        <h2 className='py-6 font-museo text-xl text-center'>Estas son las toneladas que llevamos recuperadas en este 2024...</h2>
                        <BasicDemo />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sustentabilidad

