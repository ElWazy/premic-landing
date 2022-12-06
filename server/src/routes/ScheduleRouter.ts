import { Request, Response, Router } from "express"
import { MongoError } from "mongodb"
import { collections } from "../services/database.service"

export const scheduleRouter = Router()

scheduleRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const schedules = await collections.schedules?.find({}).toArray()

    res.status(200).send(schedules)
  } catch (error) {
    if (error instanceof MongoError) {
      res.status(500).send({ error: error.message })
    }
  }
})

scheduleRouter.get('/:id', async (req: Request, res: Response) => {
  const _id = req.params.id

  try {
    const query = { _id }
    const schedule = await collections.schedules?.findOne(query)

    if (schedule) {
      res.status(200).send(schedule)
    }
  } catch (error) {
    res.status(404).send({ error: `${_id} Not found` })
  }
})

scheduleRouter.put('/:id', async (req: Request, res: Response) => {
  const _id = req.params.id

  try {
    const schedule = req.body
    const query = { _id }
    const update = { $set: schedule }
    const options = { upsert: true }

    const result = await collections.schedules?.updateOne(query, update, options)

    result
      ? res.status(200).send({ message: `Successfully updated schedule with id ${_id}` })
      : res.status(304).send({ error: `Schedule with id ${_id} not updated` })
  } catch (error) {
    if (error instanceof MongoError) {
      console.error(error.message)
      res.status(400).send({ error: error.message })
    }
  }
})

scheduleRouter.delete('/:id', async (req: Request, res: Response) => {
  const _id = req.params.id

  try {
    const query = { _id }
    const result = await collections.schedules?.deleteOne(query)

    if (result && result.deletedCount) {
      res.status(202).send({ message: `Successfully removed schedule with id ${_id}` })
    } else if (!result) {
      res.status(400).send({ error: `Failed to remove schedule with id ${_id}` })
    } else if (!result.deletedCount) {
      res.status(404).send({ error: `Schedule with id ${_id} does not exist` })
    }
  } catch (error) {
    if (error instanceof MongoError) {
      console.error(error.message)
      res.status(400).send({ error: error.message })
    }
  }
})
