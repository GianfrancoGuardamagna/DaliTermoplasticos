import Link from 'next/link'
import { FiInstagram, FiMail, FiPhone } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className='sticky botton-0 z-10 w-full h-20 flex flex-col items-center font-sans text-[10px] xl:flex-row md:h-10 md:text-xs lg:text-base md:justify-between md:px-2 md:bg-fepGreen lg:px-6'>
            <div className="w-full h-2/3 flex items-center justify-center bg-black xl:hidden">
                <Link href='https://www.instagram.com/dalitermoplasticos' target="_blank" className='w-full flex items-center justify-center gap-1 text-base text-fepGreen'>
                    <p className='font-medium mb-[1px]'>También nos encontras en</p>
                    <FiInstagram size={22} />
                </Link>
            </div>
            <div className='w-full h-2/3 md:h-full flex items-center justify-center md:w-[50%] md:justify-start bg-fepGreen'>Todos los derechos reservados, Dali termoplásticos </div>
            <div className='hidden xl:flex items-center gap-1'>
                <FiPhone /><span>0223 599-9980</span>
            </div>
            <div className='hidden xl:flex items-center gap-1'>
                <FiMail /><span>dalitermoplasticos@gmail.com</span>
            </div>
            <Link href='https://www.instagram.com/dalitermoplasticos' target="_blank" className='hidden xl:flex items-center gap-1'>
                <FiInstagram /><span>Dali termoplásticos</span>
            </Link>
        </footer>
    )
}

export default Footer