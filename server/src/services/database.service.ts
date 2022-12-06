import { Collection, MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'
import Company from '../models/Company'
import User from '../models/User'
import { Location } from '../models/Location'
import Price from '../models/Price'
import Schedule from '../models/Schedule'
import Bus from '../models/Bus'

export const collections: {
  companies?: Collection<Company>,
  users?: Collection<User>,
  locations?: Collection<Location>,
  prices?: Collection<Price>,
  schedules?: Collection<Schedule>,
  buses?: Collection<Bus>
} = {}

export async function connectToDatabase() {
  dotenv.config()

  const MONGODB_URI = process.env.MONGODB_URI as string

  const client = new MongoClient(MONGODB_URI)
  await client.connect()

  const database = client.db('premic')

  const companiesCollection = database.collection<Company>('companies')
  collections.companies = companiesCollection

  const usersCollection = database.collection<User>('users')
  collections.users = usersCollection

  const locationsCollection = database.collection<Location>('locations')
  collections.locations = locationsCollection

  const pricesCollection = database.collection<Price>('prices')
  collections.prices = pricesCollection

  const schedulesCollection = database.collection<Schedule>('schedules')
  collections.schedules = schedulesCollection

  const busesCollection = database.collection<Bus>('buses')
  collections.buses = busesCollection

  console.log(
    `
    Successfully connected to database ${database.databaseName} and collection ${companiesCollection.collectionName}
    `
  )
}

