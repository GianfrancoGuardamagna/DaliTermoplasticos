'use client'
import Link from 'next/link'

const NavegacionRegreso = () => {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (

        <div className="w-screen h-28 sticky top-0 z-10 py-2 px-6 md:px-10 flex justify-between items-center bg-white md:bg-black ">
            <div className="h-full w-1/2 flex items-end pb-3">
                <Link href="/" onClick={scrollToTop} className='font-museo text-lg md:text-2xl text-fepGreen'>Volver al inicio</Link>
            </div>
            <Link href="/" onClick={scrollToTop} className="h-full w-1/4 bg-[url(/logo_reduccion.png)] sm:bg-[url(/logo_negro.png)] md:bg-[url(/logo_blanco.png)] bg-contain bg-no-repeat bg-right" />
        </div>

    )
}

export default NavegacionRegreso