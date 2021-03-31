import express from 'express'
import { signUp } from './controller/signup.controller'

const router = express.Router()

//Methods Here
router.route('/signup').post(signUp)

export default router
