'use client'
import { useState } from 'react';

const DropdownNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const options = [
        { label: 'Nosotros', value: 'nosotros' },
        { label: 'Productos', value: 'productos' },
        { label: 'Sustentabilidad', value: 'sustentabilidad' },
        { label: 'Contacto', value: 'contacto' },
    ];

    const handleOptionClick = (value) => {
        const section = document.getElementById(value);
        if (section) {
            setIsMenuOpen(!isMenuOpen)
            section.scrollIntoView({ behavior: 'smooth' })
        }
    };

    return (
        <div className="md:hidden">

            <div className='curson pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</div>

            {isMenuOpen && (
                <div className='absolute left-0 w-full mt-4 bg-white'>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="m-4 flex justify-start items-center  bg-white text-fepGreen text-2xl  curson pointer "
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}



        </div>
    );
};

export default DropdownNavbar;