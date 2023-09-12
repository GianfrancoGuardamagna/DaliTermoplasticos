import React from 'react'

const Contacto = () => {
    return (
        <div className='w-[90%] sm:w-[60%] md:w-[80%] mx-auto h-full mt-8 flex flex-col justify-center md:flex-row md:justify-around items-center'>
            <h1 className='flex justify-center py-4 font-museo text-4xl md:hidden'>Contacto</h1>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1571.7459436122836!2d-57.58616896430362!3d-38.012310671926535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dec57355e5bd%3A0x12e3b4002ff9dd27!2sF.E.P.%20F%C3%A1brica%20de%20Envases%20Pl%C3%A1sticos!5e0!3m2!1sen!2snl!4v1693256925480!5m2!1sen!2snl"
                frameBorder="0"
                className='rounded-2xl w-[80%] h-[200px] mt-2 md:w-[45%] md:h-[80%] border-2 border-black'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex="0" />

            <form id="contact" action="" method="POST" className='flex flex-col items-start w-full my-6 md:my-0 md:w-[45%] h-[60%]'>
                <input
                    className='w-full h-10 rounded-lg border-2 p-2 my-1 border-black'
                    required
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Nombre y Apellido"
                />
                <div className='w-full flex gap-2'>
                    <input
                        className='w-full h-10 rounded-lg border-2 p-2 my-1 border-black' required id="phone" type="tel" name="phone" placeholder="Telefono" />
                    <input
                        className='w-full h-10 rounded-lg border-2 p-2 my-1 border-black' required id="empresa" type="text" name="empresa" placeholder="Empresa" />
                </div>
                <input
                    className='w-full h-10 rounded-lg border-2 p-2 my-1 border-black' required id="email" type="email" name="email" placeholder="Email" />

                <textarea
                    className='w-full h-50 rounded-lg border-2 p-2 my-1 border-black' required id="message" rows="8" name="message"
                    placeholder="Mensaje"></textarea>

                <button
                    className='w-full h-50 rounded-lg border-1 p-2 my-1 border-black bg-fepGreen font-museo'
                    id="contact-send" type="submit">ENVIAR</button>

                <input type="hidden" name="_next" value="http://localhost:8080/contact/received" />
                <input type="hidden" name="_captcha" value="false" />
            </form>

        </div>
    )
}

export default Contacto