import {
  Card,
  Container,
  Divider,
  Stack
} from '@mui/material'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'

import User from '../models/User'
import MapViewer from './Map/MapViewer'

const socket = io('/')

function SocketPlayground() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const sendUsers = (user: User) => {
      setUsers([user, ...users])
    }

    socket.on('coordinates', sendUsers)

    return () => {
      socket.off('coordinates', sendUsers)
    }
  }, [])

  return (
    <Container sx={{ mb: 6 }} maxWidth="md">
      <Card variant="outlined">
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={{ sm: 6, md: 2 }}
        >
          <MapViewer />
        </Stack>
      </Card>
    </Container>
  )
}

export default SocketPlayground
