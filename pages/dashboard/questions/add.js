import { Button, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import MultipleSelect from '../../../components/Select/MultipleSelect';
import { levelSelect, subjectSelect } from '../../../helpers/constants';
import axios from 'axios';
import { questionValidationSchema } from '../../../utils/questionValidationSchema';
import { mutate } from 'swr';
import { useFormik } from 'formik';
import OptionsDialog from '../../../components/Dialogs/OptionsDialog';

const initialValues = {
    question: '',
    options: [''],
    correctOption: '',
    description: '',
    levels: [],
    subjects: [],
    keywords: '',
    slug: '',
}

function AddQuestion() {
    const [msg, setMsg] = useState('');
    const [optionsOpen, setOptionsOpen] = React.useState(false);

    const { handleSubmit, handleChange, handleBlur, touched, errors, values, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: questionValidationSchema,
        async onSubmit() {

            await axios.post(`/api/dashboard/questions`, { ...values })
                .then((r) => {
                    console.log(r)
                    setMsg({ title: r.data, type: 'success' });
                    mutate(`/api/dashboard/questions`)
                }).catch((err) => {
                    setMsg({ title: err.response.data, type: 'err' })
                })
        }
    })

    const handleLevelChange = (event) => {
        const {
            target: { value },
        } = event;
        setFieldValue(
            'levels',
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleSubjectChange = (event) => {
        const {
            target: { value },
        } = event;
        setFieldValue(
            // On autofill we get a stringified value.
            'subjects',
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleOptionsContinue = (options, correctOption) => {
        setOptionsOpen(false);
        setFieldValue('options', Object.keys(options).map(key => options[key]));
        setFieldValue('correctOption', options[correctOption]);
    }
    return (

        <Stack spacing={1.5}>
            <TextField
                variant="outlined"
                type="text"
                label="Question"
                id="question"
                autoComplete="off"
                value={values.question}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.question && touched.question ? true : false}
                helperText={errors.question && touched.question ? errors.question : null}
            />
            <OptionsDialog
                open={optionsOpen}
                onOpen={() => setOptionsOpen(true)}
                onClose={handleOptionsContinue}
                error={errors.correctOption ? true : false}
                helperText={errors.correctOption}
            />
            <TextareaAutosize
                minRows={5}
                placeholder="Descriptions"
                id="description"
                value={values.description}
                onChange={handleChange}
                error={errors.description && touched.description ? true : false}
                helperText={errors.description && touched.description ? errors.description : null}
            />
            <MultipleSelect
                label="Select Levels"
                menuItems={levelSelect}
                id="levels"
                value={values.levels}
                onChange={handleLevelChange}
            />
            <MultipleSelect
                label="Select Subjects"
                menuItems={subjectSelect}
                id="subjects"
                value={values.subjects}
                onChange={handleSubjectChange}
            />
            <TextField
                variant="outlined"
                type="text"
                label="Keywords"
                id="keywords"
                autoComplete="off"
                value={values.keywords}
                onChange={handleChange}
                error={errors.keywords && touched.keywords ? true : false}
                helperText={errors.keywords && touched.keywords ? errors.keywords : null}
            />
            <TextField
                variant="outlined"
                type="text"
                label="Slug"
                id="slug"
                autoComplete="off"
                value={values.slug}
                onChange={handleChange}
                error={errors.slug && touched.slug ? true : false}
                helperText={errors.slug && touched.slug ? errors.slug : null}
            />
            <Typography variant='body1'
                sx={{ textAlign: 'center' }}
                color={msg.type == 'err' ? 'red' : 'green'}
            >
                {msg.title}
            </Typography>
            <Button onClick={handleSubmit} fullWidth variant="contained">Submit</Button>
        </Stack>

    )
}

export default AddQuestion