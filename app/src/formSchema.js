import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .required('Name is required'),
    email: Yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: Yup
        .string(),
    checked: Yup
        .boolean(),
});

export default formSchema;