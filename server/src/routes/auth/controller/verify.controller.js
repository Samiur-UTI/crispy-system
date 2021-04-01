import * as admin from 'firebase-admin'
import { verifyToken } from '../../../helpers/jwt'
import { config } from '../../../configs/env'

/**
 * @desc email verification Controller
 * @param {*} req
 * @param {*} res
 */

export const verify = async (req, res) => {
  try {
    const { uid } = verifyToken(req.params.token)
    const user = await admin.auth().getUser(uid)
    await admin.auth().updateUser(uid, {
      emailVerified: true,
    })

    res.status(201).cookie('verified', 'true', {
      sameSite: 'strict',
      path: '/',
      maxAge: 20 * 1000, //20 seconds
    })

    user.displayName === undefined
      ? res.redirect(`${config.CLIENT_DEV_URL}complete-profile`)
      : res.redirect(`${config.CLIENT_DEV_URL}signin`)
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

    console.log(error)
  }
}
