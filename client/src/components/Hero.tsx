import {
  Box,
  Container,
  Typography
} from '@mui/material'
import { blueGrey } from '@mui/material/colors'

function Hero() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h1"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Premic
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          No vuelvas a esperar la locomoción colectiva y ten control de tu tiempo.
        </Typography>
        <Typography variant="subtitle2" align="center" color={blueGrey[600]}>
          ¡Toca o has click en el mapa!
        </Typography>
      </Container>
    </Box>
  )
}

export default Hero
