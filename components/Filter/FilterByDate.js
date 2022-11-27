import { Divider, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

function FilterByDate() {
    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="simple-date-select-label">Date Range</InputLabel>
            <Select
                size="small"
                labelId="simple-date-select-label"
                id="simple-date-select"
                // value={age}
                // onChange={handleChange}
                label="Date Range"
            >
                <MenuItem value="">
                </MenuItem>
                <MenuItem value={10}>Today</MenuItem>
                <MenuItem value={20}>Yesterday</MenuItem>
                <MenuItem value={30}>Last 28 days</MenuItem>
                <MenuItem value={30}>Last 60 days</MenuItem>
                <MenuItem value={30}>Last 90 days</MenuItem>
                <Divider />
                <MenuItem value={30}>Custom...</MenuItem>
            </Select>
        </FormControl>
    )
}

export default FilterByDate