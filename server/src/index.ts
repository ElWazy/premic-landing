import cors from 'cors'
import express from 'express'
import http from 'http'
import morgan from 'morgan'
import { Server as SocketServer } from 'socket.io'
import { join } from 'path'

const PORT = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server)

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(join(__dirname, '../../client/dist')))

io.on('connection', socket => {
  console.log(socket.id)
})

server.listen(PORT)
