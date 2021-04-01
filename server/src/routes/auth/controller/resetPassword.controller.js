import * as admin from 'firebase-admin'
import { config } from '../../../configs/env'
import { createToken, verifyToken } from '../../../helpers/jwt'
import { sendPassResetEmail } from '../../../helpers/sendEmail'
import { resetLinkSent, userNotFound } from '../auth.responses'

export const resetLink = async (req, res) => {
  try {
    const user = await admin.auth().getUserByEmail(req.body.email)
    await sendPassResetEmail(user.uid, user.email, user.displayName)
    res.status(201).json(resetLinkSent(user))
  } catch (error) {
    error.code === 'auth/user-not-found' && res.status(202).json(userNotFound)
    console.log(error)
  }
}

export const verifyResetLink = async (req, res) => {
  try {
    const { uid } = verifyToken(req.params.token)
    const user = admin.auth().getUser(uid)

    const resetToken = createToken({ uid: user.uid })
    res.status(201).cookie('resetToken', `${resetToken}`, {
      sameSite: 'strict',
      path: '/',
      httpOnly: true,
    })
    res.redirect(`${config.CLIENT_DEV_URL}update-password`)
  } catch (error) {
    switch (error.name) {
      case 'TokenExpiredError':
        res.redirect(`${config.CLIENT_DEV_URL}token-expired`)
        break
      case 'JsonWebTokenError':
        res.redirect(`${config.CLIENT_DEV_URL}invalid-token`)
      default:
        break
    }
  }
}
