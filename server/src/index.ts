import cors from 'cors'
import express from 'express'
import http from 'http'
import morgan from 'morgan'
import { Server as SocketServer } from 'socket.io'
import { join } from 'path'

const PORT = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server, {
  cors: {
    origin: ['http://localhost:5173']
  }
})

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../../client/dist')))
}

io.on('connection', socket => {
  console.log(socket.id)
  socket.on('update_location', location => {
    console.log(location)
  })
})

server.listen(PORT)
