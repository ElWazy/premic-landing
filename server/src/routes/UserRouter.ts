import { Request, Response, Router } from 'express'
import { MongoError } from 'mongodb'
import bcrypt from 'bcrypt'
import { collections } from '../services/database.service'

export const userRouter = Router()

const saltRounds = 10

userRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const users = await collections.users?.find({}).toArray()

    res.status(200).send(users)
  } catch (error) {
    if (error instanceof MongoError) {
      res.status(500).send({ error: error.message })
    }
  }
})

userRouter.get('/:id', async (req: Request, res: Response) => {
  const _id = req.params.id

  try {
    const query = { _id }
    const user = await collections.users?.findOne(query)

    if (user) {
      res.status(200).send(user)
    }
  } catch (error) {
    res.status(404).send({ error: `${_id} Not found` })
  }
})

userRouter.put('/:id', async (req: Request, res: Response) => {
  const _id = req.params.id

  try {
    const requestUser = req.body
    const { password } = requestUser

    let user = {}

    try {
      const passwordHashed = await bcrypt.hash(password, saltRounds)
      user = { ...requestUser, password: passwordHashed }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message)
        res.status(400).send({ error: error.message })
      }
    }

    const query = { _id }
    const update = { $set: user }
    const options = { upsert: true }

    const result = await collections.users?.updateOne(query, update, options)

    result
      ? res.status(200).send({ message: `Successfully updated user with id ${_id}` })
      : res.status(304).send({ error: `user with id ${_id} not updated` })
  } catch (error) {
    if (error instanceof MongoError) {
      console.error(error.message)
      res.status(400).send({ error: error.message })
    }
  }
})

userRouter.delete('/:id', async (req: Request, res: Response) => {
  const _id = req.params.id

  try {
    const query = { _id }
    const result = await collections.users?.deleteOne(query)

    if (result && result.deletedCount) {
      res.status(202).send({ message: `Successfully removed user with id ${_id}` })
    } else if (!result) {
      res.status(400).send({ error: `Failed to remove user with id ${_id}` })
    } else if (!result.deletedCount) {
      res.status(404).send({ error: `user with id ${_id} does not exist` })
    }
  } catch (error) {
    if (error instanceof MongoError) {
      console.error(error.message)
      res.status(400).send({ error: error.message })
    }
  }
})
