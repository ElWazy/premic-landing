import { Request, Response, Router } from "express"
import { MongoError } from "mongodb"
import { collections } from "../services/database.service"

export const priceRouter = Router()

priceRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const prices = await collections.prices?.find({}).toArray()

    res.status(200).send(prices)
  } catch (error) {
    if (error instanceof MongoError) {
      res.status(500).send({ error: error.message })
    }
  }
})

priceRouter.get('/:id', async (req: Request, res: Response) => {
  const _id = req.params.id

  try {
    const query = { _id }
    const price = await collections.prices?.findOne(query)

    if (price) {
      res.status(200).send(price)
    }
  } catch (error) {
    res.status(404).send({ error: `${_id} Not found` })
  }
})

priceRouter.put('/:id', async (req: Request, res: Response) => {
  const _id = req.params.id

  try {
    const price = req.body
    const query = { _id }
    const update = { $set: price }
    const options = { upsert: true }

    const result = await collections.prices?.updateOne(query, update, options)

    result
      ? res.status(200).send({ message: `Successfully updated price with id ${_id}` })
      : res.status(304).send({ error: `price with id ${_id} not updated` })
  } catch (error) {
    if (error instanceof MongoError) {
      console.error(error.message)
      res.status(400).send({ error: error.message })
    }
  }
})

priceRouter.delete('/:id', async (req: Request, res: Response) => {
  const _id = req.params.id

  try {
    const query = { _id }
    const result = await collections.prices?.deleteOne(query)

    if (result && result.deletedCount) {
      res.status(202).send({ message: `Successfully removed price with id ${_id}` })
    } else if (!result) {
      res.status(400).send({ error: `Failed to remove price with id ${_id}` })
    } else if (!result.deletedCount) {
      res.status(404).send({ error: `Price with id ${_id} does not exist` })
    }
  } catch (error) {
    if (error instanceof MongoError) {
      console.error(error.message)
      res.status(400).send({ error: error.message })
    }
  }
})
