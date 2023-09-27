
const Sustentabilidad = () => {
    return (
        <div className='h-full flex flex-col justify-start items-center bg-[url(/sustentabilidad.png)] sm:bg-none bg-no-repeat bg-contain bg-right-bottom'>
            <h1 className='pt-6 font-museo text-4xl text-fepGreen md:hidden'>Sustentabilidad</h1>
            <div className='h-full sm:flex sm:items-center'>
                <p className='w-[95%] mx-auto py-3 sm:w-[60%] sm:px-3 font-museo text-sm sm:text-base text-center md:p-10 md:h-full lg:text-2xl xl:leading-snug sm:flex sm:items-center'>
                    En nuestra empresa de envases plásticos en Mar del Plata, Buenos Aires, la sustentabilidad es
                    el núcleo de nuestra misión. Reconocemos nuestra responsabilidad con el entorno que nos
                    rodea, especialmente con la hermosa costa atlántica que nos acoge. A través de la innovación
                    constante, nos esforzamos por reducir nuestro impacto ambiental al mínimo, implementando
                    prácticas de producción ecoamigables y materiales reciclables en nuestros envases. Nuestra
                    visión se funde con la preservación de la costa, trabajando incansablemente para asegurar que
                    nuestras operaciones no dejen huella en este tesoro natural que compartimos con la
                    comunidad.
                </p>
                <div className='hidden sm:flex sm:w-[40%] sm:h-full bg-[url(/sm_sustentabilidad.png)] bg-contain bg-right bg-no-repeat md:h-[80%]' />
            </div>
        </div>
    )
}

export default Sustentabilidad