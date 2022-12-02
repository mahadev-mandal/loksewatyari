import { Autocomplete, Divider, InputAdornment, Paper, TextField } from '@mui/material';
import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from 'next/router';
const data = [
    { title: 'mahadev mandal' },
    { title: 'mahadev mandal' },
    { title: 'mahadev mandal' },
    { title: 'mahadev mandal' },
    { title: 'mahadev mandal' },
    { title: 'mahadev mandal' },
    { title: 'mahadev mandal' },
    { title: 'mahadev mandal' },
    { title: 'mahadev mandal' },
    { title: 'mahadev mandal' },
    { title: 'mahadev mandal' },
    { title: 'mahadev mandal' },

]

function SearchField() {
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleSelectedChange = (event, value) => {
        if (value) {
            if (typeof (value) === 'object') {
                router.push(`/search?pid=${value._id}`)
            } else {
                router.push(`/search?searchText=${searchText}&pid`)
            }
        }
    }
    return (
        <Autocomplete
            id="free-solo-demo"
            // sx={{ width: 200 }}
            componentsProps={{
                paper: {
                    sx: {
                        borderRadius: 0,
                        boxSizing:'border-box'
                    }
                }
            }}
            freeSolo
            size="small"
            open={open}
            onInputChange={(_id, value) => {
                if (value.length === 0) {
                    if (open) setOpen(false);
                } else {
                    if (!open) setOpen(true);
                }
            }}
            onClose={() => setOpen(false)}
            onChange={(e, v) => handleSelectedChange(e, v)}
            options={data ? data.length >= 1 ? data.map((option) => ({ _id: option._id, label: option.title })) : [] : []}
            renderInput={(params) =>
                <Paper
                    sx={{
                        borderRadius: open ? '7px 7px 0 0' : '20px 20px',
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        // height: { sm: 40, xs: 30 },
                    }}
                >
                    <TextField
                        {...params}
                        sx={{
                            "& fieldset": { border: 'none' },
                        }}
                        placeholder="What are you lookin for?"
                        onChange={e => setSearchText(e.target.value)}
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                    <Divider orientation='vertical' sx={{ height: 28, m: 0.5 }} />
                                </InputAdornment>
                            ),
                        }}
                    />

                </Paper>}
        />
    )
}

export default SearchField
