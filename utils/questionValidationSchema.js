import * as yup from 'yup';

export const questionValidationSchema = yup.object().shape({
    question: yup.string().required().trim(),
    options: yup.array(),
    correctOption: yup.string()
        .when(['options'], {
            is: (options) => options.some(opt => opt),
            then: yup.string().required('Select one correct option'),
            otherwise: yup.string().notRequired()
        }),
    description: yup.string(),
    levels: yup.array(),
    subjects: yup.array(),
    keywords: yup.string(),
    slug: yup.string(),
})