import { styled } from '@mui/material/styles';
import { Box, Checkbox, IconButton, InputLabel, Paper, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import MiniDrawer from '../../../components/Drawer/MiniDrawer'
import CancelIcon from '@mui/icons-material/Cancel';

const fieldsArray = [
    {
        label: 'question',
        type: 'text',
    },
    {
        label: 'options',
        type: 'text',
    },
    {
        label: 'correctOption',
        type: 'number',
    },
    {
        label: 'description',
        type: 'text',
    },
    {
        label: 'keywords',
        type: 'text',
    },
    {
        label: 'slug',
        type: 'text',
    },
    {
        label: 'levels',
        type: 'text',
    },
    {
        label: 'subjects',
        type: 'text',
    },

]

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

function AddQuestion() {

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
                    {fieldsArray.map((field) => (
                        <TextField
                            key={field.label}
                            variant="outlined"
                            type={field.type}
                            label={field.label}
                            autoComplete="off"
                        />
                    ))}
                    <Option />
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
        options.splice(i, 1);
        if (correctOption > i) {
            setCorrectOption(correctOption - 1);
        } else if (correctOption == i && options.length > 1) {
            options.splice(i, 1);
            setCorrectOption(null)
        }
        setOptions([...options])
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