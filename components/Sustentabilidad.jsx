import Image from 'next/image'
import Torta from './torta'

const Sustentabilidad = () => {
    return (
        <div className='h-full flex flex-col justify-start items-center sm:bg-none bg-no-repeat bg-contain bg-right-bottom gap-6'>
            <h1 className='pt-6 font-museo text-4xl text-fepGreen md:hidden'>Sustentabilidad</h1>
            <div className='h-full sm:flex sm:items-center gap-4'>
                <p className='w-[95%] mx-auto py-3 sm:w-[60%] sm:px-3 font-museo text-sm sm:text-base text-center md:p-10 md:h-full lg:text-2xl xl:leading-snug sm:flex sm:items-center'>
                Mediante la reutilización de materiales plásticos, logramos minimizar el desperdicio industrial y reducir significativamente el consumo de recursos naturales, lo que no solo optimiza la eficiencia en sus líneas de producción, sino que también les permite ahorrar costos. Al optar por materia prima reciclada de alta calidad, nuestros clientes mejoran su competitividad en el mercado, alineándose con las crecientes demandas de sostenibilidad y responsabilidad ambiental.
                Además, en nuestra planta contamos con sistemas de recirculación de agua a lo largo de todo el proceso productivo, lo que nos permite optimizar el uso de este recurso vital. Esta tecnología nos ayuda a reducir significativamente el consumo de agua, manteniendo altos estándares de eficiencia y minimizando el impacto ambiental. Además, implementamos un sistema de tratamiento de efluentes que nos permite reutilizar el agua en diferentes etapas del proceso, evitando la contaminación y garantizando la sostenibilidad de nuestras operaciones.
                </p>
                <Image src='/sustentabilidad/sustentabilidad.png' width={500} height={500}/>
                <h2 className='py-6 font-museo text-xl text-center'>Estas son las toneladas que llevamos recuperadas en este 2024...</h2>
                <Torta />
            </div>
        </div>
    )
}

export default Sustentabilidad