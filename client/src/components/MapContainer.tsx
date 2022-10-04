import { Typography } from '@mui/material'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'

import MapViewer from './Map/MapViewer'

function MapContainer() {
  return (
    <Container sx={{ mb: 4 }} maxWidth="md">
      <Typography
        component="p"
        align="center"
        color="text.primary"
        gutterBottom
      >
        ¡Haz click en el mapa para empezar!
      </Typography>
      <Card variant="outlined">
        <MapViewer />
      </Card>
    </Container>
  )
}

export default MapContainer
