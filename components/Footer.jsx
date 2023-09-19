import Link from 'next/link'
import { MdLocalPhone, MdMail } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className='sticky botton-0 z-10 w-full h-20 flex flex-col items-center font-sans text-[10px] md:flex-row md:h-10 md:text-sm lg:text-base md:justify-between md:px-4 md:bg-fepGreen lg:px-8'>
            <div className="w-full h-2/3 flex items-center justify-center gap-2 bg-black md:hidden">
                <Link href='https://www.instagram.com/fepenvases' target="_blank" className='w-9 h-9 flex items-center'><img src='/icon_instagram.svg' alt='instagram' /></Link>
                <Link href='' className='w-9 h-9 flex items-center'><img src='/icon_facebook.svg' alt='face' /></Link>
            </div>

            <div className='w-full h-2/3 md:h-full flex items-center justify-center md:w-[60%] md:justify-start bg-fepGreen'>Todos los derechos reservados, Fep fábrica de envases plásticos</div>
            <div className='hidden md:flex items-center gap-1'>
                <MdLocalPhone /><span>0223 481-4490</span>
            </div>
            <div className='hidden md:flex items-center gap-1'>
                <MdMail /><span>fep@gmail.com</span>
            </div>
        </footer>
    )
}

export default Footer