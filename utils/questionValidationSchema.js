import * as yup from 'yup';

export const questionValidationSchema = yup.object().shape({
    question: yup.string().required(),
    options: yup.array(),
    correctOption: yup.string(),
    description: yup.string(),
    levels: yup.array(),
    subjects: yup.array(),
    keywords: yup.string(),
    slug: yup.string(),
})