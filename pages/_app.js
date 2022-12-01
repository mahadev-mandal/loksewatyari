import '../styles/globals.css'
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import DrawerHeader from '../components/Drawer/DrawerHeader';
import MiniDrawer from '../components/Drawer/MiniDrawer';
import { Box } from '@mui/material';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname.startsWith('/dashboard')) {
    return (
      <Box sx={{ display: 'flex', background: 'rgb(250,250,250)' }}>
        <MiniDrawer />
        <Box component="main"
          sx={{
            flexGrow: 1,
            p: { xs: 0, sm: 2, lg: 3 }
          }}
        >
          <DrawerHeader />
          <Box sx={{ width: '100vw' }}>
            <Component {...pageProps} />
          </Box>
        </Box>
      </Box>
    )
  }
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
}
export default MyApp
