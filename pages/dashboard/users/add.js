import { Box } from '@mui/material'
import React from 'react'
import MiniDrawer from '../../../components/Drawer/MiniDrawer'
import DrawerHeader from '../../../components/DrawerHeader'

function AddUser() {
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
        <div>AddUser</div>
      </Box>
    </Box>
  )
}

export default AddUser