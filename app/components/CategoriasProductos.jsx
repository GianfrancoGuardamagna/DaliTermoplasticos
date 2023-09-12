import Link from 'next/link'
import React from 'react'

const CategoriasProductos = () => {
    return (
        <div className=' w-full h-full flex flex-col'>
            <h1 className='flex justify-center font-museo text-4xl py-4 md:hidden'>Productos</h1>
            <div className='flex flex-col items-center justify-center gap-2 sm:flex-row sm:mt-4 md:h-full md:mt-0 md:gap-4'>
                <Link href='/categoria/bidones' className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] cursor-pointer flex items-center justify-center bg-fepGreen rounded-3xl font-museo'>Categoria 1</Link>
                <Link href='/categoria/botellas' className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] cursor-pointer flex items-center justify-center bg-fepGreen rounded-3xl font-museo'>Categoria 2</Link>
                <Link href='/categoria/contenedores' className='w-[150px] h-[150px] md:w-[200px] md:h-[200px] cursor-pointer flex items-center justify-center bg-fepGreen rounded-3xl font-museo'>Categoria 3</Link>
            </div>
        </div>

    )
}

export default CategoriasProductos