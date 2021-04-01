import express from 'express'
import { signUp } from './controller/signup.controller'
import { emailVerify } from './controller/emailVerify.controller'
import {
  resetLink,
  verifyResetLink,
} from './controller/resetPassword.controller'
import { updatePassword } from './controller/updatePassword.controller'

const router = express.Router()

//Signup and verify email
router.route('/signup').post(signUp)
router.route('/email/verify/:token').get(emailVerify)

// reset password and update
router.route('/password/reset').post(resetLink)
router.route('/password/reset/verify/:token').get(verifyResetLink)
router.route('/password/update').post(updatePassword)

export default router
