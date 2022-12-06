import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import http from 'http'
import { join } from 'path'

import { companyRouter } from './routes/CompanyRouter'
import { userRouter } from './routes/UserRouter'
import { locationRouter } from './routes/LocationRouter'
import { priceRouter } from './routes/PriceRouter'
import { scheduleRouter } from './routes/ScheduleRouter'
import { busRouter } from './routes/BusRouter'

const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(express.urlencoded({ extended: false }))

app.use('/api/companies', companyRouter)
app.use('/api/users', userRouter)
app.use('/api/locations', locationRouter)
app.use('/api/prices', priceRouter)
app.use('/api/schedules', scheduleRouter)
app.use('/api/buses', busRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../../client/dist')))
}

export default server
