import {
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material'
import { Outlet } from 'react-router-dom';

import Footer from './Footer'
import Hero from './Hero'
import NavTabs from './NavTabs';

const theme = createTheme();

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
      <NavTabs />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
}

export default LandingPage
