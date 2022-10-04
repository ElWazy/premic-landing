import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material'

import Footer from './Footer'
import Hero from './Hero'
import MapContainer from './MapContainer';

const theme = createTheme();

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
      <MapContainer />
      <Footer />
    </ThemeProvider>
  );
}

export default LandingPage
