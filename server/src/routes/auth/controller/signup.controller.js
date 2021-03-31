import * as admin from 'firebase-admin'
import { userCreated, emailAlreadyExist } from '../auth.responses'

/**
 * @desc signup controller
 * @param {*} req
 * @param {*} res
 */
export const signUp = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await admin.auth().createUser({
      email,
      password,
    })
    console.log(user)
    res.status(200).json(userCreated(user))
  } catch (error) {
    if (error.code === 'auth/email-already-exists') {
      res.status(202).json(emailAlreadyExist)
    } else {
      console.log(error)
    }
  }
}
