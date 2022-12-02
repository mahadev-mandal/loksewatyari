import * as yup from 'yup';

export const userValidationSchema = yup.object().shape({
    firstName: yup.string().required().trim(),
    lastName: yup.string().required().trim(),
    role: yup.string().required(),
    mobile: yup.string(),
    email: yup.string().email().required(),
    password: yup.string().required(),
})