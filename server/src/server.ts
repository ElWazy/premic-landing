import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import http from 'http'
import { join } from 'path'
import { companyRouter } from './routes/CompanyRouter'

const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(express.urlencoded({ extended: false }))

app.use('/api/company', companyRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../../client/dist')))
}

export default server
