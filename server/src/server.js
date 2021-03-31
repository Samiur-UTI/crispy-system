import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import initFirebaseAdmin from './configs/firebase/firebase-admin.config'

// router import
import authenticationRoute from './routes/auth/auth.route'

// dev
import colors from 'colors'

colors.setTheme({
  info: 'bgGreen',
  help: 'cyan',
  warn: 'yellow',
  success: 'green',
  error: 'red',
  data: 'blue',
})

// app setup
const app = express()
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.send('Server is here!')
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

// route Setup
// authentication
app.use('/api/authentication/', authenticationRoute)

/**
 * @desc init server
 */
export const startServer = () => {
  //Initialize Firebase Admin
  initFirebaseAdmin()
  // Start Server
  const PORT = process.env.PORT
  app.listen(PORT || 4000, () => {
    console.info(`Server running on port: ${PORT ? PORT : '4000'}`.success)
  })
}
