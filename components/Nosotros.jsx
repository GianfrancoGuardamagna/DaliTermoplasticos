import Image from "next/image"

const Nosotros = () => {
    return (
        <>
        <section className="flex flex-col gap-4">
            <h1 className='flex justify-center pt-4 font-museo text-4xl md:hidden'>Nuestra planta</h1>
            <div className='flex flex-col mx-auto w-full sm:w-[90%] gap-4 md:w-[95%] h-[calc(100vh-112px)] md:flex-row md:items-center md:justify-center md:gap-6'>
                <div className="w-full md:w-1/2 h-[30%] my-2 md:h-[80%] relative">
                    <Image alt='nosotros' src='/nosotros.jpg' fill sizes='h-full' className="object-cover sm:rounded-xl" />
                </div>

                <p className='text-center font-museo text-sm w-[90%] mx-auto sm:text-base md:w-1/2 md:text-center xl:text-2xl'>
                Somos una empresa dedicada a la recuperación de termoplásticos con más de 30 años de trayectoria en la ciudad de Mar del Plata. Comercializamos materia prima reciclada de excelente calidad y brindamos servicios de recuperación de residuos plásticos industriales. Nuestros clientes comparten nuestro compromiso con la sustentabilidad, haciendo de esta responsabilidad social un eje central en sus operaciones. A través de nuestros servicios, optimizan sus procesos productivos, reducen costos y minimizan el impacto ambiental. Además, somos miembros activos de la Cámara de la Industria Plástica de Mar del Plata y Zona de Influencia, una institución dedicada a promover la valorización y disposición sustentable de residuos plásticos. Colaboramos en la sensibilización y formación de la sociedad, mientras apoyamos al sector productivo en el desarrollo de soluciones innovadoras y responsables.
                </p>
            </div>
            </section>
        </>
    )
}

// 749
export default Nosotros