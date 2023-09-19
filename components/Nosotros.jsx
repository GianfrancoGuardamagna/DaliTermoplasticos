import Image from "next/image"

const Nosotros = () => {
    return (
        <>
            <h1 className='flex justify-center pt-4 font-museo text-4xl md:hidden'>Nosotros</h1>
            <div className='flex flex-col mx-auto w-full sm:w-[90%] md:w-[95%] h-[calc(100vh-112px)] md:flex-row md:items-center md:justify-center md:gap-6'>
                <div className="w-full md:w-1/2 h-[30%] my-2 md:h-[80%] relative">
                    <Image alt='nosotros' src='/nosotros.png' fill sizes='h-full' className="object-cover sm:rounded-xl" />
                </div>

                <p className='text-center font-museo text-sm w-[90%] mx-auto sm:text-base md:w-1/2 md:text-center xl:text-2xl'>
                    Ubicada en la pintoresca ciudad costera de Mar del Plata, Buenos Aires, nuestra empresa se
                    enorgullece de ser líder en la fabricación y distribución de envases plásticos. Con años de
                    experiencia en la industria, ofrecemos soluciones innovadoras y sostenibles para satisfacer las
                    necesidades de envasado de diversas empresas. Nuestros productos de alta calidad abarcan
                    desde envases para alimentos hasta envases industriales. Trabajamos con un compromiso
                    inquebrantable con la excelencia, la atención al cliente y el respeto por el medio ambiente,
                    respaldando así el crecimiento de nuestros clientes en la región y más allá.
                </p>
            </div>
        </>
    )
}

export default Nosotros