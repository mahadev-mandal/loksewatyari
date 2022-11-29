import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox, IconButton, TextField } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

export default function OptionsDialog() {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState(['', '', '', '']);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOptionsChange = (e, index) => {
        console.log(e.target.value,index)
    }
    console.log(options)
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Add all options and select correct one."}
                </DialogTitle>
                <DialogContent>
                    {options.map((option, index) => (
                        <TextField
                            key={option}
                            // onKeyPress={onKeyPress}
                            id="standard-start-adornment"
                            fullWidth
                            sx={{ minWidth: 400, mt: 1 }}
                            value={options[index]}
                            onChange={e => handleOptionsChange(e, index)}
                            InputProps={{
                                startAdornment: <Checkbox />,
                                endAdornment: <IconButton color="error">
                                    <CancelIcon />
                                </IconButton>
                            }}
                            variant="outlined"
                        />
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button color="warning" onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} autoFocus>
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}