import { Request, Response, Router } from "express"
import { MongoError } from "mongodb"
import { collections } from "../services/database.service"

export const locationRouter = Router()

locationRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const locations = await collections.locations?.find({}).toArray()

    res.status(200).send(locations)
  } catch (error) {
    if (error instanceof MongoError) {
      res.status(500).send({ error: error.message })
    }
  }
})

locationRouter.get('/:id', async (req: Request, res: Response) => {
  const _id = req.params.id

  try {
    const query = { _id }
    const location = await collections.locations?.findOne(query)

    if (location) {
      res.status(200).send(location)
    }
  } catch (error) {
    res.status(404).send({ error: `${_id} Not found` })
  }
})

locationRouter.put('/:id', async (req: Request, res: Response) => {
  const _id = req.params.id

  try {
    const location = req.body
    const query = { _id }
    const update = { $set: location }
    const options = { upsert: true }

    const result = await collections.locations?.updateOne(query, update, options)

    result
      ? res.status(200).send({ message: `Successfully updated location with id ${_id}` })
      : res.status(304).send({ error: `Location with id ${_id} not updated` })
  } catch (error) {
    if (error instanceof MongoError) {
      console.error(error.message)
      res.status(400).send({ error: error.message })
    }
  }
})

locationRouter.delete('/:id', async (req: Request, res: Response) => {
  const _id = req.params.id

  try {
    const query = { _id }
    const result = await collections.locations?.deleteOne(query)

    if (result && result.deletedCount) {
      res.status(202).send({ message: `Successfully removed location with id ${_id}` })
    } else if (!result) {
      res.status(400).send({ error: `Failed to remove location with id ${_id}` })
    } else if (!result.deletedCount) {
      res.status(404).send({ error: `Location with id ${_id} does not exist` })
    }
  } catch (error) {
    if (error instanceof MongoError) {
      console.error(error.message)
      res.status(400).send({ error: error.message })
    }
  }
})
