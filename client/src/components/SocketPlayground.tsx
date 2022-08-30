import {
  Stack,
  Container,
  Card,
  Divider
} from '@mui/material'

import MapViewer from './MapViewer'
import UsersConnectedList from './UsersConnectedList'

function SocketPlayground() {
  return (
    <Container sx={{ mb: 6 }} maxWidth="md">
      <Card variant="outlined">
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={{ sm: 6, md: 2 }}
        >
          <MapViewer />
          <UsersConnectedList />
        </Stack>
      </Card>
    </Container>
  )
}

export default SocketPlayground
