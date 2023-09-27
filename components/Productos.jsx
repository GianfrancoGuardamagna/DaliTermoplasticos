import Image from 'next/image'
import Link from 'next/link'

const Productos = () => {
    return (
        <div className='w-full h-full flex flex-col items-center'>
            <h1 className='flex justify-center font-museo text-4xl md:hidden'>Productos</h1>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <p className='w-[90%] mx-auto pt-4 text-sm text-center text-fepGreen md:text-left md:py-6 md:text-base lg:text-xl xl:text-2xl'>Hace click sobre los productos para ver nuestros catalogos</p>
                <div className='flex flex-wrap items-center justify-center gap-2 mt-4 mb-16 sm:w-[90%] sm:gap-4 md:w-[80%] md:mt-0 lg:w-[95%]'>

                    <Link href='https://drive.google.com/file/d/1ZLz1Rchyn3ehZXOD7ybe4yHXeWnmdtiR/view?usp=share_link' target="_blank" className='text-center text-fepGreen font-museo text-lg cursor-pointer transform transition duration-500 hover:scale-110 xl:text-2xl'>
                        <div className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] xl:w-[280px] xl:h-[280px] my-2 rounded-3xl relative'>
                            <Image alt='Potes' src='/productos/potes.png' fill sizes='h-full' className='object-contain rounded-3xl' />
                        </div>
                        POTES
                    </Link>

                    <Link href='https://drive.google.com/file/d/14ysjVpDt_zB0cRBTeG8OUFwZhTMlqJjD/view?usp=share_link' target="_blank" className='text-center text-fepGreen font-museo text-lg cursor-pointer transform transition duration-500 hover:scale-110 xl:text-2xl'>
                        <div className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] xl:w-[280px] xl:h-[280px] my-2 rounded-3xl relative'>
                            <Image alt='Bidones' src='/productos/bidones.png' fill sizes='h-full' className='object-contain rounded-3xl' />
                        </div>
                        BIDONES
                    </Link>

                    <Link href='https://drive.google.com/file/d/1ZWScmE9-rt05P6QJSRcCJbnoOnP3Oygm/view?usp=share_link' target="_blank" className='text-center text-fepGreen font-museo text-lg cursor-pointer transform transition duration-500 hover:scale-110 xl:text-2xl'>
                        <div className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] xl:w-[280px] xl:h-[280px] my-2 rounded-3xl relative'>
                            <Image alt='Botellas' src='/productos/botellas.png' fill sizes='h-full' className='object-contain rounded-3xl' />
                        </div>
                        BOTELLAS
                    </Link>

                    <Link href='https://drive.google.com/file/d/104gVCB0pLB5y1hCsoi4Ir814uWKYkkG5/view?usp=share_link' target="_blank" className='text-center text-fepGreen font-museo text-lg cursor-pointer transform transition duration-500 hover:scale-110 xl:text-2xl'>
                        <div className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px] xl:w-[280px] xl:h-[280px] my-2 rounded-3xl relative'>
                            <Image alt='Pet' src='/productos/pet.png' fill sizes='h-full' className='object-contain rounded-3xl' />
                        </div>
                        PET
                    </Link>

                </div>
            </div>
        </div>

    )
}

export default Productos