'use client'
import { useForm } from 'react-hook-form';
import { validationSchema } from '../utils/validations';
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";

const ContactForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    async function onSubmit(data) {
        try {
            // Send email using Nodemailer
            await fetch("/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            // Show success message or redirect to a thank you page
            console.log("Email sent successfully!");
        } catch (error) {
            // Handle error
            console.error("Failed to send email:", error);
        } finally {
            reset();
            toast.success("Tu mensaje se ha enviado!");
        }
    }

    return (
        <>
            <form id="contact" onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start w-full my-6 md:my-0 md:w-[70%] '>
                <div className='w-full my-1'>
                    <input
                        className='w-full h-9 rounded-lg border-2 p-2 border-black'
                        type="text"
                        {...register('nombre', { required: true })}
                        placeholder="Nombre y Apellido" />
                    <small className='text-red-500'>{errors.nombre?.message}</small>
                </div>

                <div className='w-full flex gap-2'>
                    <div className='w-full my-1'>
                        <input
                            className='w-full h-9 rounded-lg border-2 p-2 border-black'
                            type="tel"
                            minLength={10}
                            maxLength={12}
                            {...register('telefono', { required: true })}
                            placeholder="Telefono" />
                        <small className='text-red-500'>{errors.telefono?.message}</small>
                    </div>
                    <div className='w-full my-1'>
                        <input
                            className='w-full h-9 rounded-lg border-2 p-2 border-black'
                            type="text"
                            {...register('empresa', { required: false })}
                            placeholder="Empresa" />
                        <small className='text-red-500'>{errors.empresa?.message}</small>
                    </div>
                </div>
                <div className='w-full my-1'>
                    <input
                        className='w-full h-9 rounded-lg border-2 p-2 border-black'
                        type="email"
                        {...register('email', { required: true })}
                        placeholder="Email" />
                    <small className='text-red-500'>{errors.email?.message}</small>
                </div>
                <div className='w-full my-1'>
                    <textarea
                        className='w-full h-40 rounded-lg border-2 p-2 border-black'
                        type='text'
                        rows="8"
                        {...register('mensaje', { required: true })}
                        placeholder="Mensaje"></textarea>
                    <small className='text-red-500'>{errors.mensaje?.message}</small>
                </div>

                <button className='w-full h-50 rounded-lg border-1 p-2 my-1 border-black bg-fepGreen font-museo'>
                    ENVIAR
                </button>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>

    )
}

export default ContactForm