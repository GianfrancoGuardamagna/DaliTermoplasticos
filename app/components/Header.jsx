import DropdownNavbar from "./DropdownNavbar"
import Navbar from "./Navbar"



const Header = () => {
    const icons = ['/public/icon_instagram.svg', '/public/icon_facebook.svg']
    return (
        <header className='sticky top-0 z-10 w-screen h-20 py-2 px-6 md:h-28 md:px-8 flex justify-between items-center font-museo text-4xl md:text-white  md:bg-black'>

            <a href='#landing'
                className="w-1/4 md:w-2/12 h-full bg-[url(/logo_reduccion.png)] md:bg-[url(/logo.png)] bg-contain bg-no-repeat bg-start " />

            <div className="w-1/4 h-full flex items-center justify-end md:w-8/12 md:mb-6">
                <Navbar />
                <DropdownNavbar />
            </div>

            <div className="hidden h-full w-1/12 mb-6 md:flex justify-end items-end gap-2">
                <a href='' className='w-9 h-9'><img src='/icon_instagram.svg' alt='insta' /></a>
                <a href='' className='w-9 h-9'><img src='/icon_facebook.svg' alt='face' /></a>
            </div>
        </header>
    )
}

export default Header