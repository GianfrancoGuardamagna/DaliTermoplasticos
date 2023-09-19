import * as yup from 'yup';

export const validationSchema = yup.object({
  nombre: yup.string().required('Nombre es requerido'),
  telefono: yup
    .string()
    .required('Telefono es requerido')
    .min(10, 'Ingrese un número valido')
    .max(12, 'Ingrese un número valido'),
  empresa: yup.string(),
  email: yup
    .string()
    .email('Ingrese un email valido')
    .required('Email es requerido'),
  mensaje: yup.string().required('Mensaje es requerido'),
});
