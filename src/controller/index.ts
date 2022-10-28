import { Request, Response } from 'express'
import page from '../services/index'

const index = (_req: Request, res: Response): void => res.sendFile(page('../views/index.html'))

const form = (_req: Request, res: Response): void => res.sendFile(page('../views/form.html'))

const notFound = (_req: Request, res: Response): void => res.sendFile(page('../views/notFound.html'))

export default {
  index,
  form,
  notFound
}
