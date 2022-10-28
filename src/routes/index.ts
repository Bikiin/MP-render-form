import { Router } from 'express'
import renderRoute from '../controller'

export default Router()

  .get('/', renderRoute.index)

  .get('/crear-usuario', renderRoute.form)

  .get('*', renderRoute.notFound)
