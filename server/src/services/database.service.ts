import { Collection, MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'
import Company from '../models/Company'
import User from '../models/User'
import { Location } from '../models/Location'

export const collections: {
  companies?: Collection<Company>,
  users?: Collection<User>,
  locations?: Collection<Location>
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

  console.log(
    `
    Successfully connected to database ${database.databaseName} and collection ${companiesCollection.collectionName}
    `
  )
}

