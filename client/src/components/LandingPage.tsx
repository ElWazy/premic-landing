import {
  CssBaseline,
  createTheme,
  ThemeProvider,
} from '@mui/material'

import Footer from './Footer'
import Hero from './Hero'
import SocketPlayground from './SocketPlayground'
import Survey from './Survey'

const theme = createTheme();

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
      <SocketPlayground />
      <Survey />
      <Footer />
    </ThemeProvider>
  );
}

export default LandingPage
