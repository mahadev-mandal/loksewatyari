import { Box, Button, Checkbox, IconButton, InputLabel, Paper, Stack, TextareaAutosize, TextField } from '@mui/material'
import React, { useState } from 'react'
import MiniDrawer from '../../../components/Drawer/MiniDrawer'
import CancelIcon from '@mui/icons-material/Cancel';
import MultipleSelect from '../../../components/Select/MultipleSelect';
import DrawerHeader from '../../../components/DrawerHeader';



const levelSelect = [
    { value: 1, title: 'One' },
    { value: 2, title: 'Two' },
    { value: 3, title: 'Three' },
    { value: 4, title: 'Four' },
    { value: 5, title: 'Five' },
    { value: 6, title: 'Six' },
    { value: 7, title: 'Seven' }
]
const subjectSelect = [
    { value: 'electrical', title: 'Electrical' },
    { value: 'math', title: 'Math' },
    { value: 'grammar', title: 'Grammar' },
    { value: 'english', title: 'English' },
    { value: 'gk', title: 'GK' },
]

function AddQuestion() {
    const [levels, setLevels] = useState([]);
    const [subjects, setSubjects] = useState([]);

    const handleLevelChange = (event) => {
        const {
            target: { value },
        } = event;
        setLevels(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleSubjectChange = (event) => {
        const {
            target: { value },
        } = event;
        setSubjects(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

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
                    />
                    <Option />
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Descriptions"
                    />
                    <MultipleSelect
                        label="Select Levels"
                        value={levels}
                        onChange={handleLevelChange}
                        menuItems={levelSelect}
                    />
                    <MultipleSelect
                        label="Select Subjects"
                        value={subjects}
                        onChange={handleSubjectChange}
                        menuItems={subjectSelect}
                    />
                    <TextField
                        variant="outlined"
                        type="text"
                        label="Keywords"
                        id="keyword"
                        autoComplete="off"
                    />
                    <TextField
                        variant="outlined"
                        type="text"
                        label="Slug"
                        id="slug"
                        autoComplete="off"
                    />
                    <Button fullWidth variant="contained">Submit</Button>
                </Stack>
            </Box>

        </Box>
    )
}

export default AddQuestion

const Option = () => {
    const [options, setOptions] = useState(['']);
    const [correctOption, setCorrectOption] = useState(null);
    const handleChange = (e, i) => {
        options[i] = e.target.value;
        setOptions([...options])
    }
    const handleRemove = (i) => {
        if (options.length > 1) {
            options.splice(i, 1);
            if (correctOption > i) {
                setCorrectOption(correctOption - 1);
            } else if (correctOption == i && options.length > 1) {
                setCorrectOption(null)
            }
            setOptions([...options])
        }
    }

    return (
        <Paper elevation={2}>
            <InputLabel sx={{ ml: 1 }}>Options</InputLabel>
            <Stack spacing={0.5}>
                {options.map((a, i) => (
                    <TextField
                        key={i}
                        onKeyPress={(e) => e.key == 'Enter' && setOptions([...options, ''])}
                        onChange={e => handleChange(e, i)}
                        autoFocus
                        id="standard-start-adornment"
                        fullWidth
                        value={options[i]}
                        InputProps={{
                            startAdornment: <Checkbox checked={correctOption == i} onChange={() => setCorrectOption(i)} />,
                            endAdornment: <IconButton color="error" onClick={() => handleRemove(i)}>
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