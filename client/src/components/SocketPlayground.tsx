import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import io from 'socket.io-client'
import { useEffect, useState } from 'react'

import MapViewer from './Map/MapViewer'
import User from '../models/User'

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
