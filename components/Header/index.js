import { Box, Grid, IconButton, Stack } from '@mui/material'
import React from 'react'
import SearchField from './SearchField'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import PersonIcon from '@mui/icons-material/Person';
import { headerPadding } from '../../helpers/constants';
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
    return (
        <Grid container
            alignItems="center"
            columnGap={5}
            sx={{
                background: '#E1304C',
                p: headerPadding
            }}
        >
            <Grid item sm={2} xs={12} sx={{ height: { sm: 70, xs: 60 } }} >
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <IconButton aria-label="menu"
                        size="large"
                        sx={{ display: { sm: 'none', xs: 'inline', }, color: 'white' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Link href="/">
                        <a>
                            <Image width={100} height={35} src={logo} alt="room finder logo" />
                        </a>
                    </Link> */}
                    <Box sx={{ width: 200, background: 'blue' }}></Box>
                    <Box sx={{ display: { sm: 'none', xs: 'inline' } }}>
                        <Brightness4Icon />
                    </Box>
                </Stack>

            </Grid>
            <Grid item xs={true} sx={{ mb: { xs: 1, sm: 0 } }}>
                <SearchField />
            </Grid>
            <Grid item display={{ sm: "inline-block", xs: "none" }}>
                <Stack direction="row" alignItems="center">
                    <IconButton>
                        <Brightness4Icon />
                    </IconButton>
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Header