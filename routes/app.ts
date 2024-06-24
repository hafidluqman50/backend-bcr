import express, { Express, Request, Response } from "express";
import cookieParser from 'cookie-parser'
import '@config/database'
import carsRoutes from '@routes/cars/api'
import usersRoutes from '@routes/users/api'
import authRoutes from "./auth/api";
import { authCheck, isAdministrator } from "@Middlewares/Kernel";
import swaggerUI from 'swagger-ui-express'
import YAML from 'yamljs'
import cors from 'cors'

const swaggerDocuments = YAML.load('api-synrgy7-ch6-docs.yaml')

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get("/", (req: Request, res: Response): void => {
    res.status(200).json({
      "message": "Restful API BCR Chapter 5 FSW 2 Hafiidh Luqmanul Hakim"
    })
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocuments))

app.use('/api/cars', carsRoutes)
app.use('/api/user-admin', [authCheck.handle, isAdministrator.handle(['superadmin'])], usersRoutes)
app.use('/api/', authRoutes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export default app