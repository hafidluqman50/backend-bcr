import express, { Express, Request, Response } from 'express'
import { none } from '@config/multer'
import { userController } from '@Controllers/User'

const userAuthRoute: Express = express()

userAuthRoute.route('/')
  .get(none.none(), (req: Request, res: Response): Promise<void> => userController.getAll(req, res))
  .post(none.none(), (req: Request, res: Response): Promise<void> => userController.insert(req, res))

userAuthRoute.route('/:id')
  .get(none.none(), (req: Request, res: Response): Promise<void> => userController.getById(req, res))
  .put(none.none(), (req: Request, res: Response): Promise<void> => userController.update(req, res))
  .delete(none.none(), (req: Request, res: Response): Promise<void> => userController.delete(req, res))

export default userAuthRoute
        
