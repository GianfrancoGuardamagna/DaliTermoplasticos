import { MdLocalPhone, MdMail } from 'react-icons/md'

const Footer = () => {
    return (
        <footer className='sticky botton-0 z-10 w-full flex flex-col md:flex-row items-center h-20 md:h-10 font-sans text-[10px] md:text-sm lg:text-base md:justify-between md:px-4 lg:px-8 md:bg-fepGreen'>
            <div className="w-full h-2/3 flex items-center justify-center gap-2 bg-black md:hidden">
                <a href='' className='w-9 h-9 flex items-center'><img src='/icon_instagram.svg' alt='insta' /></a>
                <a href='' className='w-9 h-9 flex items-center'><img src='/icon_facebook.svg' alt='face' /></a>
            </div>
            <div className='w-full h-2/3 md:h-full flex items-center justify-center md:w-2/3 md:justify-start bg-fepGreen'>Todos los derechos reservados, Fep fábrica de envases plásticos</div>
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