import { AddressInfo } from 'net'
import { hashSync } from 'bcrypt'
import { instrument } from '@socket.io/admin-ui'
import { trackerSocket } from './routes/socket/trackerSocket'
import { Server as SocketServer } from 'socket.io'
import server from './server'
import * as dotenv from 'dotenv'
import { connectToDatabase } from './services/database.service'

dotenv.config()

const PORT = process.env.PORT || 5000
const SOCKET_ADMIN_USERNAME = process.env.SOCKET_ADMIN_USERNAME as string
const SOCKET_ADMIN_PASSWORD = process.env.SOCKET_ADMIN_PASSWORD as string

const socketServerOptions = {
  path: '/tracker/',
  cors: {
    origin: '*'
  }
}

const io = new SocketServer(server, socketServerOptions)

io.on('connection', socket => {
  trackerSocket(socket)
})

instrument(io, {
  auth: {
    type: "basic",
    username: SOCKET_ADMIN_USERNAME,
    password: hashSync(SOCKET_ADMIN_PASSWORD, 10)
  }
})

connectToDatabase()
  .then(() => {
    server.listen(PORT, () => {
      const info: AddressInfo = server.address() as AddressInfo
      console.log(`Listen on http://localhost:${info.port}`)
    })
  })
  .catch((error: Error) => {
    console.error('Database connection failed', error)
    process.exit()
  })
