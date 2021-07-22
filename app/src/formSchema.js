import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .required('Name is required')
        .min(2, 'Password must be at least 2 characters long'),
    email: Yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: Yup
        .string()
        .required('Password is required')
        .min(4, 'Password must be at least 4 characters long'),
    tos: Yup
        .boolean(),
});

export default formSchema;