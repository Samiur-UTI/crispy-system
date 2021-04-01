import * as admin from 'firebase-admin'
import { verifyToken } from '../../../helpers/jwt'
import { passwordUpdated } from '../auth.responses'

export const updatePassword = async (req, res) => {
  try {
    let uid = undefined

    req.cookies.resetToken
      ? (uid = verifyToken(req.cookies.resetToken))
      : req.body.uid
      ? (uid = req.body.uid)
      : null

    const user = admin.auth().getUser(uid)
    await admin.auth().updatePassword(uid, {
      updatePassword: req.body.newPassword,
    })

    res.status(200).json(passwordUpdated(user))
  } catch (error) {
    console.log(error)
  }
}
