import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import React from 'react'

const user = [
  { label: "First Name", type: 'text', id: 'firstName' },
  { label: "Last Name", type: 'text', id: 'lastName' },
  { label: "Mobile No", type: 'text', id: 'mobile' },
  { label: "Email", type: 'text', id: 'email' },
  { label: "Password", type: 'text', id: 'password' },
]

function AddUser() {
  return (
    <Stack spacing={1.5}>
      {user.map((usr) => (
        <TextField
          key={usr.id}
          label={usr.label}
          type={usr.type}
          id={usr.id}
        />
      ))}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">User role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="User Role"
        // onChange={handleChange}
        >
          <MenuItem value="normal">Normal</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="super-admin">Super Admin</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained">Add User</Button>
    </Stack>
  )
}

export default AddUser