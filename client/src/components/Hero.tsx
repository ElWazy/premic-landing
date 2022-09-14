import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

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
      </Container>
    </Box>
  )
}

export default Hero
