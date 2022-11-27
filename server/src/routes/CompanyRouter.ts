import { Request, Response, Router } from "express"
import { MongoError } from "mongodb"
import { collections } from "../services/database.service"

export const companyRouter = Router()

companyRouter.get('/', async (_req: Request, res: Response) => {
  try {
    const companies = await collections.companies?.find({}).toArray()

    res.status(200).send(companies)
  } catch (error) {
    if (error instanceof MongoError) {
      res.status(500).send(error.message)
    }
  }
})

companyRouter.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const query = { id }
    const company = await collections.companies?.findOne(query)

    if (company) {
      res.status(200).send(company)
    }
  } catch (error) {
    res.status(404).send(`${id} Not found`)
  }
})

companyRouter.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const company = req.body
    const query = { id }

    const result = await collections.companies?.updateOne(query, {
      $set: company
    }, {
      upsert: true
    })

    result
      ? res.status(200).send(`Successfully updated company with id ${id}`)
      : res.status(304).send(`Company with id ${id} not updated`)
  } catch (error) {
    if (error instanceof MongoError) {
      console.error(error.message)
      res.status(400).send(error.message)
    }
  }
})

companyRouter.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const query = { id }
    const result = await collections.companies?.deleteOne(query)

    if (result && result.deletedCount) {
      res.status(202).send(`Successfully removed company with id ${id}`)
    } else if (!result) {
      res.status(400).send(`Failed to remove company with id ${id}`)
    } else if (!result.deletedCount) {
      res.status(404).send(`Company with id ${id} does not exist`)
    }
  } catch (error) {
    if (error instanceof MongoError) {
      console.error(error.message)
      res.status(400).send(error.message)
    }
  }
})
