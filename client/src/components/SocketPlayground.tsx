import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import MapViewer from './Map/MapViewer'

function SocketPlayground() {
  return (
    <Container sx={{ mb: 6 }} maxWidth="md">
      <Card variant="outlined">
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          spacing={{ sm: 6, md: 2 }}
        >
          <MapViewer />
        </Stack>
      </Card>
    </Container>
  )
}

export default SocketPlayground
