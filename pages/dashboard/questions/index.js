import { Box, Button, Stack } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react'
import MiniDrawer from '../../../components/Drawer/MiniDrawer';
import DrawerHeader from '../../../components/DrawerHeader';
import SearchableTable from '../../../components/Tables/SearchableTable'
const tableHeading = ['Question', 'Date', 'Edit', 'Delete', 'View'];
const dataHeading = ['question', 'date', 'edit', 'delete'];
const data = []

function Questions() {
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(20);
    const inputRef = React.useRef({});

    const handleChangePage = () => {

    }
    const handleChangeRowsPerPage = () => {

    }
    return (
        <Box sx={{ display: 'flex' }}>
            <MiniDrawer />
            <Box component="main"
                sx={{
                    flexGrow: 1,
                    px: { xs: 1, sm: 2, lg: 3 },
                    py: 1
                }}
            >
                <DrawerHeader />
                <Stack direction="row" spacing={0.5} sx={{ mb: 0.2 }}>
                    <Link href="/dashboard/questions/add">
                        <Button variant="contained" color="warning">Add Question</Button>
                    </Link>
                    <Button variant="contained" color="warning">Manage Question</Button>
                </Stack>
                <SearchableTable
                    tableHeading={tableHeading}
                    dataHeading={dataHeading}
                    data={data}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    totalCount={data.length}
                    handleChangePage={handleChangePage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                    // ExtraCells={ }
                    type="selectable"
                    selected={selected}
                    // onSelectChange={ handleSelectChange }
                    // onAllSelectChange={ }
                    // onKeyPress={ }
                    inputRef={inputRef}
                />
            </Box>
        </Box>
    )
}

export default Questions