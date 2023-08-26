'use client'

import { useState } from "react";

const Navbar = () => {

    const [activeSection, setActiveSection] = useState('');


    const handleNavClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = 112;
            const topPosition = targetElement.offsetTop;
            window.scrollTo({
                top: topPosition - offset,
                behavior: 'smooth',
            });
            setActiveSection(targetId);
        }
    };

    return (
        <nav className='hidden w-full h-full md:flex flex-row justify-center gap-4 items-end md:text-xl lg:text-3xl xl:text-4xl xl:gap-8'>
            <a
                href='#nosotros'
                onClick={(event) => handleNavClick(event, 'nosotros')}
                className={activeSection === 'nosotros' ? 'underline' : ''}
            >Nosotros
            </a>
            <a
                href='#productos'
                onClick={(event) => handleNavClick(event, 'productos')}
                className={activeSection === 'productos' ? 'underline' : ''}
            >
                Productos
            </a>
            <a
                href='#sustentabilidad'
                onClick={(event) => handleNavClick(event, 'sustentabilidad')}
                className={activeSection === 'sustentabilidad' ? 'underline' : ''}
            >
                Sustentabilidad
            </a>
            <a
                href='#contacto'
                onClick={(event) => handleNavClick(event, 'contacto')}
                className={activeSection === 'contacto' ? 'underline' : ''}
            >
                Contacto
            </a>
        </nav>
    )
}

export default Navbar