import express from 'express'
import { signUp } from './controller/signup.controller'
import {verify} from './controller/verify.controller'

const router = express.Router()

//Methods Here
router.route('/signup').post(signUp)

router.route('/verify/:token').get(verify)

export default router
