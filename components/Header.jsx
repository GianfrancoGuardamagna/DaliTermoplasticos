'use client'
import Link from 'next/link'
import { MdLocalPhone, MdMail } from 'react-icons/md'
import DropdownNavbar from "./DropdownNavbar"
import Navbar from "./Navbar"

const Header = () => {

    const handleClick = (event) => {
        event.preventDefault();
        const landing = document.getElementById('landing');
        const offset = 112;
        const topPosition = landing.offsetTop;
        window.scrollTo({
            top: topPosition - offset,
            behavior: 'smooth',
        });
    }

    return (
        <header className='w-screen sticky top-0 z-10 flex flex-col'>   
            <div className='h-8 p-2 flex items-center justify-center gap-10 bg-black text-white text-sm md:hidden'>
                <div className='flex items-center gap-1'>
                    <MdLocalPhone /><span>223 599-9980</span>
                </div>
                <div className='flex items-center gap-1'>
                    <MdMail /><span>dalitermoplasticos@gmail.com</span>
                </div>
            </div>
            <div className="h-20 md:h-28 py-2 px-6 flex justify-between items-center bg-white font-museo lg:px-8 md:text-white md:bg-black">
                <Link
                    href='#landing'
                    onClick={(event) => handleClick(event)}
                    className="h-full w-1/4 md:w-2/12 bg-[url(/logo_reduccion.png)] sm:bg-[url(/logo_negro.png)] md:bg-[url(/logo_blanco.png)] bg-contain bg-no-repeat bg-start md:bg-center" />
                <div className="h-full w-1/4 md:w-9/12 flex items-center justify-end lg:pb-3">
                    <Navbar />
                    <DropdownNavbar />
                </div>
            </div>

        </header>
    )
}

export default Header