import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function MultipleSelect({ label, value, onChange, menuItems }) {
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="level-select-label">{label}</InputLabel>
                <Select
                    labelId="level-select-label"
                    id="level-select"
                    multiple
                    value={value}
                    onChange={onChange}
                    input={<OutlinedInput label={label} />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {menuItems.map((item) => (
                        <MenuItem key={item.title} value={item.value}>
                            <Checkbox checked={value.indexOf(item.value) > -1} />
                            <ListItemText primary={item.title} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}

MultipleSelect.propTypes = {
    label: PropTypes.string,
    value: PropTypes.array,
    onChange: PropTypes.func,
    menuItems: PropTypes.array.isRequired
}
const checkEqual = (prevProps, nextProps) => prevProps.value == nextProps.value;
export default React.memo(MultipleSelect, checkEqual);