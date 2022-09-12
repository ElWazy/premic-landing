import express from 'express'
import { Server as SocketServer } from 'socket.io'
import http from 'http'
import cors from 'cors'
import morgan from 'morgan'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const PORT = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server)

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(join(__dirname, '../../client/dist')))

io.on('connection', socket => {
  console.log('new user connected: id ->', socket.id)

  socket.on('coordinates', body => {
    console.log(body)
    socket.broadcast.emit('coordinates', body)
  })

  socket.on('disconnect', reason => {
    console.log('user disconected: reason ->', reason)
  })
})

server.listen(PORT)
console.log(`server on port ${PORT}`)
