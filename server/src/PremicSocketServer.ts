import express from 'express'
import http from 'http'
import morgan from 'morgan'
import { Server as SocketServer } from 'socket.io'
import { join } from 'path'

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server, {
  cors: {
    origin: "http://127.0.0.1:5173",
    credentials: true
  }
})

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../../client/dist')))
}

interface Coords {
  lat: number;
  lng: number;
}


interface Location {
  id: string;
  coords: Coords;
}

const locations: Map<string, Location> = new Map()

io.on('connection', socket => {
  socket.on('update', (coords: Coords) => {
    const location = { id: socket.id, coords }
    locations.set(socket.id, location)

    const result = Array.from(locations.values())
    socket.broadcast.emit('list', result)
  })

  io.on('disconnect', () => {
    locations.delete(socket.id)
    const result = Array.from(locations.values())
    socket.broadcast.emit('list', result)
  })
})

export default server
