import { Request, Response, Router } from "express"
import { MongoError } from "mongodb"
import { collections } from "../services/database.service"

export const busRouter = Router()

const resourceName = 'Bus'

busRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const buses = await collections.buses?.find({}).toArray()

    res.status(200).send(buses)
  } catch (error) {
    if (error instanceof MongoError) {
      res.status(500).send({ error: error.message })
    }
  }
})

busRouter.get('/:id', async (req: Request, res: Response) => {
  const _id = req.params.id

  try {
    const query = { _id }
    const bus = await collections.buses?.findOne(query)

    if (bus) {
      res.status(200).send(bus)
    }
  } catch (error) {
    res.status(404).send({ error: `${_id} Not found` })
  }
})

busRouter.put('/:id', async (req: Request, res: Response) => {
  const _id = req.params.id

  try {
    const bus = req.body
    const query = { _id }
    const update = { $set: bus }
    const options = { upsert: true }

    const result = await collections.buses?.updateOne(query, update, options)

    result
      ? res.status(200).send({ message: `Successfully updated ${resourceName} with id ${_id}` })
      : res.status(304).send({ error: `${resourceName} with id ${_id} not updated` })
  } catch (error) {
    if (error instanceof MongoError) {
      console.error(error.message)
      res.status(400).send({ error: error.message })
    }
  }
})

busRouter.delete('/:id', async (req: Request, res: Response) => {
  const _id = req.params.id

  try {
    const query = { _id }
    const result = await collections.buses?.deleteOne(query)

    if (result && result.deletedCount) {
      res.status(202).send({ message: `Successfully removed ${resourceName} with id ${_id}` })
    } else if (!result) {
      res.status(400).send({ error: `Failed to remove ${resourceName} with id ${_id}` })
    } else if (!result.deletedCount) {
      res.status(404).send({ error: `${resourceName} with id ${_id} does not exist` })
    }
  } catch (error) {
    if (error instanceof MongoError) {
      console.error(error.message)
      res.status(400).send({ error: error.message })
    }
  }
})
