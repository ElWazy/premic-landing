import { Router, Request, Response } from "express"

const companyRouter = Router()

companyRouter.put('/', (_request: Request, response: Response) => {
  response.sendStatus(201)
})

export default companyRouter
