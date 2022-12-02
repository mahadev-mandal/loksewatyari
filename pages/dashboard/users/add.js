import { Backdrop, Button, CircularProgress, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import SingleSelect from '../../../components/Select/SingleSelect'
import { userValidationSchema } from '../../../utils/userValidationSchema'

const user = [
  { label: "First Name", type: 'text', id: 'firstName' },
  { label: "Last Name", type: 'text', id: 'lastName' },
  {
    label: "User Role", type: 'select', id: 'role',
    options: [
      { label: 'Normal', value: 0 },
      { label: 'Admin', value: 1 },
      { label: 'Super Admin', value: 2 }
    ]
  },
  { label: "Mobile No", type: 'text', id: 'mobile' },
  { label: "Email", type: 'text', id: 'email' },
  { label: "Password", type: 'text', id: 'password' },
]
const initialValues = {
  firstName: '',
  lastName: '',
  role: '',
  mobile: '',
  email: '',
  password: ''
}

function AddUser() {
  const [msg, setMsg] = useState({});
  const [backdropOpen, setBackdropOpen] = useState(false);

  const { handleChange, handleSubmit, handleBlur, values, touched, errors, setFieldValue } = useFormik({
    initialValues,
    validationSchema: userValidationSchema,
    async onSubmit() {
      setMsg({});
      setBackdropOpen(true);
      await axios.post('/api/dashboard/users', values)
        .then((r) => {
          setBackdropOpen(false)
          setMsg({ title: r.data, type: 'success' })
        }).catch((err) => {
          setBackdropOpen(false)
          setMsg({ title: err.response.data, type: 'error' })
        })
    }
  })
  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <Stack alignItems="center" justifyContent="center" sx={{ mt: 3 }}>
          <CircularProgress color="secondary" />
          <Typography variant='h6'>Wait loding...</Typography>
        </Stack>
      </Backdrop>
      <Stack spacing={1.5}>
        {user.map((usr) => (
          usr.type == 'select' ? <SingleSelect key={usr.id}
            value={values[usr.id]}
            onChange={e => setFieldValue(usr.id, e.target.value)}
            data={usr}
            error={errors[usr.id] && touched[usr.id] ? true : false}
            helperText={errors[usr.id] && touched[usr.id] ? errors[usr.id] : null}
          /> : <TextField
            key={usr.id}
            label={usr.label}
            type={usr.type}
            id={usr.id}
            value={values[usr.id]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors[usr.id] && touched[usr.id] ? true : false}
            helperText={errors[usr.id] && touched[usr.id] ? errors[usr.id] : null}
          />

        ))}
        <Typography variant='body1'
          sx={{ textAlign: 'center' }}
          color={msg.type == 'error' ? 'red' : 'green'}
        >
          {msg.title}
        </Typography>
        <Button variant="contained" onClick={handleSubmit}>Add User</Button>
      </Stack>
    </>
  )
}

export default AddUser