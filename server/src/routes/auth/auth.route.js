import express from 'express'
import { signUp } from './controller/signup.controller'

const router = express.Router()

//Methods Here
router.post('/signup', signUp)

export default router