import { Backdrop, Button, CircularProgress, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react'
import useSWR from 'swr';
import SimpleTable from '../../../components/Tables/SimpleTable'
import fetchData from '../../../controllers/clientControllers/fetchData'
import handleMutateData from '../../../controllers/clientControllers/handleMutateData';

const tableHeading = ['First Name', 'Last Name', 'Mobile', 'email', 'Delete', 'View'];
const dataHeading = ['firstName', 'lastName', 'mobile', 'email', 'delete', 'view'];

function Users() {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [backdropOpen, setBackdropOpen] = useState(false);
  let params = { page, rowsPerPage };

  const {
    data: users,
    error,
    mutate,
  } = useSWR('/api/dashboard/users', url => fetchData(url, params));

  const handleSelectChange = (event, row) => {
    if (event.target.checked) {
      setSelected([...selected, row]);
    } else {
      setSelected(selected.filter((p) => p._id !== row._id));
    }
  }
  const handleAllSelectChange = (event) => {
    if (event.target.checked) {
      setSelected([...new Set(selected.concat(users.data.map((p) => p)))]);
    } else {
      setSelected(
        selected.filter((s) => !users.data.map((p) => p._id).includes(s._id))
      );
    }
  }
  const handleChangePage = async (event, newPage) => {
    setBackdropOpen(true);
    setPage(parseInt(newPage));
    await handleMutateData(`/api/dashboard/users`, params);
    mutate();
    setBackdropOpen(false);
  }
  const handleChangeRowsPerPage = async (event) => {
    setBackdropOpen(true);
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(parseInt(0))
    await handleMutateData(`/api/dashboard/users`, params);
    mutate();
    setBackdropOpen(false);
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error occured while fetching users</div>
  } else if (!users) {
    return <div>Please wait loading...</div>
  }
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
      <Stack direction="row" spacing={0.5} sx={{ mb: 0.2 }}>
        <Link href="/dashboard/users/add">
          <Button variant="contained" color="warning">Add user</Button>
        </Link>
        <Button variant="contained" color="warning">Manage user</Button>
      </Stack>
      <SimpleTable
        tableHeading={tableHeading}
        dataHeading={dataHeading}
        data={users.data}
        page={page}
        rowsPerPage={rowsPerPage}
        totalCount={users.totalCount}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        // ExtraCells={ }
        type="selectable"
        selected={selected}
        onSelectChange={handleSelectChange}
        onAllSelectChange={handleAllSelectChange}
      />
    </>
  )
}

export default Users