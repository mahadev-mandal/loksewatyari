import { styled } from '@mui/material/styles';
import { Box, Stack, TextField } from '@mui/material'
import React from 'react'
import MiniDrawer from '../../../components/Drawer/MiniDrawer'

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
        type: Number,
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
                </Stack>
            </Box>
        </Box>
    )
}

export default AddQuestion