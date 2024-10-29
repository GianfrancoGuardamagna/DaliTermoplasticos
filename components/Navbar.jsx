'use client'
import { useEffect, useState } from "react";

const Navbar = () => {

    const [activeSection, setActiveSection] = useState('');

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            rootMargin: "0px",
            threshold: 0.7, // Adjust this threshold as needed
        });

        // Observe the sections
        observer.observe(document.getElementById("landing"));
        observer.observe(document.getElementById("nosotros"));
        observer.observe(document.getElementById("servicios"));
        observer.observe(document.getElementById("sustentabilidad"));
        observer.observe(document.getElementById("contacto"));

        // Clean up the observer when the component unmounts
        return () => {
            observer.disconnect();
        };
    }, []);

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
        <nav className='hidden w-full h-full lg:flex flex-row justify-center gap-4 items-end md:text-xl lg:text-2xl xl:text-4xl xl:gap-4'>
            <a
                href='nosotros'
                onClick={(event) => handleNavClick(event, 'nosotros')}
                className={activeSection === 'nosotros' ? 'underline' : ''}>
                Nosotros
            </a>
            <a
                href='servicios'
                onClick={(event) => handleNavClick(event, 'servicios')}
                className={activeSection === 'servicios' ? 'underline' : ''}
            >
                Servicios
            </a>
            <a
                href='sustentabilidad'
                onClick={(event) => handleNavClick(event, 'sustentabilidad')}
                className={activeSection === 'sustentabilidad' ? 'underline' : ''}
            >
                Sustentabilidad
            </a>
            <a
                href='contacto'
                onClick={(event) => handleNavClick(event, 'contacto')}
                className={activeSection === 'contacto' ? 'underline' : ''}
            >
                Contacto
            </a>
            <a
                href='https://fepenvases.com/'
            >
                Fep Envases
            </a>
        </nav>

    )
}

export default Navbar