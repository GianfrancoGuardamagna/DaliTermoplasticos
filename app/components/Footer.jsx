import { MdLocalPhone, MdMail } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className='sticky botton-0 z-10 flex items-center p-2 h-10 font-sans text-[10px] md:text-sm lg:text-base md:justify-between md:px-4 lg:px-8 bg-fepGreen'>
            <div>Todos los derechos reservados, Fep fábrica de envases plásticos</div>
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