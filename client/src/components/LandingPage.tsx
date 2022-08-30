import {
  CssBaseline,
  createTheme,
  ThemeProvider,
} from '@mui/material'

import Footer from './Footer'
import Hero from './Hero'
import MapViewer from './MapViewer'
import Survey from './Survey'

const theme = createTheme();

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
      <MapViewer />
      <Survey />
      <Footer />
    </ThemeProvider>
  );
}

export default LandingPage
