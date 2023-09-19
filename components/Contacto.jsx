import ContactForm from './ContactForm';

const Contacto = () => {
    return (
        <div className='w-[90%] sm:w-[60%] md:w-[95%] lg:w-[80%] mx-auto h-full mt-8 flex flex-col justify-center md:flex-row md:justify-around items-center'>
            <h1 className='flex justify-center py-4 font-museo text-4xl md:hidden'>Contacto</h1>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1571.7459436122836!2d-57.58616896430362!3d-38.012310671926535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dec57355e5bd%3A0x12e3b4002ff9dd27!2sF.E.P.%20F%C3%A1brica%20de%20Envases%20Pl%C3%A1sticos!5e0!3m2!1sen!2snl!4v1693256925480!5m2!1sen!2snl"
                frameBorder="0"
                className='rounded-2xl w-[80%] h-[200px] mt-2 md:w-[45%] md:h-[80%] border-2 border-black'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex="0" />
            <ContactForm />

        </div>
    )
}

export default Contacto