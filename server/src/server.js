import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { dbConnect } from './configs/db'

// dev
import colors from 'colors'

colors.setTheme({
  info: 'bgGreen',
  help: 'cyan',
  warn: 'yellow',
  success: 'bgBlue',
  error: 'red',
})

// app setup
const app = express()
app.disable('x-powered-by')
app.get('/', (req,res) => {
  res.send('Server is here!');
})
// global middlewares
const corsOptions = {
  origin: 'http://localhost:3000',
  cradentials: true,
}
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
dotenv.config()

export const startServer = () => {
  dbConnect()

  const PORT = process.env.PORT
  app.listen(PORT || 4000, () => {
    console.info(`Server running on port: ${PORT ? PORT : '4000'}`.success)
  })
}
