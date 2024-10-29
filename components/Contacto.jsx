import ContactForm from './ContactForm';

const Contacto = () => {
    return (
        <div className='w-[90%] sm:w-[60%] md:w-[95%] lg:w-[80%] mx-auto h-full mt-20 xl:mt-0 flex flex-col justify-center xl:flex-row md:justify-around items-center xl:gap-24'>
            <h1 className='flex justify-center py-4 font-museo text-4xl xl:hidden'>Contacto</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25151.932039790863!2d-57.62767242120208!3d-38.00065861795568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d8d05be46481%3A0x3292074ba66cdc06!2sDALI%20TERMOPLASTICOS!5e0!3m2!1ses-419!2ses!4v1729523652151!5m2!1ses-419!2ses"
                frameBorder="0"
                className='rounded-2xl w-full h-[200px] mt-2 md:w-[65%] md:h-[35%] xl:h-[50%] border-2 border-black'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex="0" />
            <ContactForm />
        </div>
    )
}

export default Contacto