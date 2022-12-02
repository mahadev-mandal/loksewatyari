import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, Checkbox, Chip, Divider, FormControl, FormHelperText, InputLabel, Select, TextField } from '@mui/material';
import PropTypes from 'prop-types';

export default function OptionsDialog({ open, onClose, onOpen, helperText, error }) {
    const [options, setOptions] = React.useState({ a: '', b: '', c: '', d: '' });
    const [correctOption, setCorrectOption] = React.useState(null);

    const handleOptionsChange = (e, key) => {
        options[key] = e.target.value
        setOptions({ ...options, })
    }
    const handleCorrectOptionChange = (e, key) => {
        if (!e.checked) {
            if (options[key]) {
                setCorrectOption(key)
            }
        }
    }
    return (
        <div>
            <FormControl fullWidth >
                <InputLabel id="demo-multiple-chip-label">Options</InputLabel>
                <Select open={false}
                    value={Object.keys(options).map((key) => options[key])}
                    onMouseDown={onOpen}
                    multiple
                    label="Options"
                    error={error}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                value && <Chip
                                    color={options[correctOption] == value ? 'success' : 'error'}
                                    key={value} label={value}
                                />
                            ))}
                        </Box>
                    )}
                    fullWidth>
                </Select>
                <FormHelperText error={error} id="options-helper" disabled >
                    {helperText}
                </FormHelperText>
            </FormControl>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Add all options and select correct one."}
                </DialogTitle>
                <DialogContent>
                    {Object.keys(options).map((key) => (
                        <TextField
                            key={key}
                            id="standard-start-adornment"
                            fullWidth
                            sx={{ minWidth: 400, mt: 1 }}
                            value={options[key]}
                            onChange={e => handleOptionsChange(e, key)}
                            InputProps={{
                                startAdornment: <Checkbox
                                    onChange={e => handleCorrectOptionChange(e, key)}
                                    checked={key == correctOption}
                                />,
                                // endAdornment: <IconButton color="error">
                                //     <CancelIcon />
                                // </IconButton>
                            }}
                            variant="outlined"
                        />
                    ))}
                </DialogContent>
                <Divider />
                <DialogActions>
                    {/* <Button color="warning" onClick={handleClose}>Cancel</Button> */}
                    <Button onClick={() => onClose(options, correctOption)} autoFocus>
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

OptionsDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    error: PropTypes.bool,
    helperText: PropTypes.string,
}