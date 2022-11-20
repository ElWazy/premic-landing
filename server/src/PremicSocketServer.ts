import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import http from 'http'
import { join } from 'path'
import { hashSync } from 'bcrypt'
import { instrument } from '@socket.io/admin-ui'
import { Server as SocketServer } from 'socket.io'

import { trackerSocket } from './routes/socket/trackerSocket'
import companyRouter from './routes/CompanyRouter'

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server, {
  path: '/tracker/',
  cors: {
    origin: '*'
  }
})

app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(express.urlencoded({ extended: false }))

app.use('/api/company', companyRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../../client/dist')))
}


io.on('connection', socket => {
  trackerSocket(socket)
})

instrument(io, {
  auth: {
    type: "basic",
    username: "elmamadisimo",
    password: hashSync("m4sT3r", 10)
  }
})

export default server
