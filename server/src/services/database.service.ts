import { Collection, MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'
import Company from '../models/Company'

export const collections: { companies?: Collection<Company> } = {}

export async function connectToDatabase() {
  dotenv.config()

  const MONGODB_URI = process.env.MONGODB_URI as string

  const client = new MongoClient(MONGODB_URI)
  await client.connect()

  const database = client.db('premic')

  const companiesCollection = database.collection<Company>('companies')
  collections.companies = companiesCollection

  console.log(
    `Successfully connected to database ${database.databaseName} and 
    collection ${companiesCollection.collectionName}`
  )
}

