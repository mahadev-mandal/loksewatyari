import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function SingleSelect({ value, onChange, data, error, helperText }) {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{data.label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id={data.id}
                value={value}
                label={data.label}
                onChange={onChange}
                error={error}
            >
                {data.options.map((opt) => (
                    <MenuItem key={opt.label} value={opt.value}>{opt.label}</MenuItem>
                ))}
            </Select>
            <FormHelperText error={error}>
                {helperText}
            </FormHelperText>
        </FormControl>
    )
}
SingleSelect.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    data: PropTypes.object,
    error: PropTypes.bool,
    helperText: PropTypes.string,
}
export default SingleSelect