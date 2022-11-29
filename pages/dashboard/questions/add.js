import { Box, Button, Checkbox, IconButton, InputLabel, Paper, Stack, TextareaAutosize, TextField } from '@mui/material'
import React, { useState } from 'react'
import MiniDrawer from '../../../components/Drawer/MiniDrawer'
import CancelIcon from '@mui/icons-material/Cancel';
import MultipleSelect from '../../../components/Select/MultipleSelect';
import DrawerHeader from '../../../components/DrawerHeader';
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
    const [msg, setMsg] = useState({});

    const { handleSubmit, handleChange, handleBlur, touched, errors, values, setFieldValue } = useFormik({
        initialValues: initialValues,
        validationSchema: questionValidationSchema,
        async onSubmit() {
            await axios.post(`/api/dashboard/questions`, { ...values })
                .then(() => {
                    setMsg({ success: 'question added' });
                    mutate(`/api/dashboard/questions`)
                }).catch(() => {
                    setMsg({ err: 'error occured' })
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
    const handleOptionsChange = (e, i) => {
        const opt = [...values.options]
        opt[i] = e.target.value;
        setFieldValue(
            'options',
            opt
        )
    }
    const handleOptionRemove = (i) => {
        if (values.options.length > 1) {
            setFieldValue('options', values.options.splice(i, 1))
            if (values.correctOption > i) {
                setFieldValue('correctOption', values.correctOption - 1)
            } else if (values.correctOption == i && values.options.length > 1) {
                setFieldValue('correctOption', null)
            }
            setFieldValue('options', [...values.options])
        }
    }
    console.log(msg)
    return (
        <Box sx={{ display: 'flex' }}>
            <MiniDrawer />
            <Box component="main"
                sx={{
                    flexGrow: 1,
                    p: { xs: 1, sm: 2, lg: 3 }
                }}
            >
                <DrawerHeader />
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
                    <OptionsDialog />
                    {/* <OptionsComp
                        id="options"
                        options={values.options}
                        correctOption={values.correctOption}
                        onChange={handleOptionsChange}
                        onKeyPress={(e) => e.key == 'Enter' && setFieldValue('options', [...values.options, ''])}
                        onCorrectOptionChange={(i) => setFieldValue('correctOption', values.options[i])}
                        onRemove={handleOptionRemove}
                    /> */}
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
                        error={errors.levels && touched.levels ? true : false}
                        helperText={errors.levels && touched.levels ? errors.levels : null}
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
                    <Button onClick={handleSubmit} fullWidth variant="contained">Submit</Button>
                </Stack>
            </Box>

        </Box>
    )
}

export default AddQuestion

const OptionsComp = ({ onChange, options, correctOption, onRemove, onCorrectOptionChange, onKeyPress }) => {

    return (
        <Paper elevation={2}>
            <InputLabel sx={{ ml: 1 }}>Options</InputLabel>
            <Stack spacing={0.5}>
                {options.map((a, i) => (
                    <TextField
                        key={i}
                        onKeyPress={onKeyPress}
                        onChange={e => onChange(e, i)}
                        autoFocus
                        id="standard-start-adornment"
                        fullWidth
                        value={options[i]}
                        InputProps={{
                            startAdornment: <Checkbox checked={correctOption == i} onChange={onCorrectOptionChange} />,
                            endAdornment: <IconButton color="error" onClick={onRemove(i)}>
                                <CancelIcon />
                            </IconButton>
                        }}
                        variant="standard"
                    />
                ))}
            </Stack>
        </Paper>

    )
}