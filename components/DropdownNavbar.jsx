'use client'
import { useState } from 'react';

const DropdownNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const options = [
        { label: 'Nosotros', value: 'nosotros' },
        { label: 'Servicios', value: 'servicios' },
        { label: 'Sustentabilidad', value: 'sustentabilidad' },
        { label: 'Contacto', value: 'contacto' },
        { label: 'Fep Envases', value: 'fep envases' },
    ];

    const handleOptionClick = (value) => {
        if(value === "fep envases") {
            setIsMenuOpen(!isMenuOpen)  
            window.open('https://fepenvases.com/', '_blank')
        }else { 
            let section = document.getElementById(value);
            setIsMenuOpen(!isMenuOpen)
            const offset = 112;
            const topPosition = section.offsetTop;
            window.scrollTo({
                top: topPosition - offset,
                behavior: 'smooth'
            })
        }
    };

    return (
        <div className="lg:hidden">
            <div className='curson pointer text-4xl' onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</div>

            {isMenuOpen && (
                <div className='absolute left-0 w-full h-screen mt-8 bg-black bg-opacity-80'>
                    <div className='absolute left-0 w-full bg-white'>
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className="m-4 flex justify-start items-center  bg-white text-fepGreen text-2xl"
                                onClick={() => handleOptionClick(option.value)}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default DropdownNavbar;