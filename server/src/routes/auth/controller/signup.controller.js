import * as admin from 'firebase-admin'
import { createToken } from '../../../helpers/jwt'
import { sendEmail } from '../../../helpers/sendGrid'
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

    //sending email verification link
    const verificationToken = createToken({ uid: user.uid }, 30)
    const verificationLink = `http://localhost:4000/api/authentication/email-verify/${verificationToken}`

    await sendEmail('emailVerification', {
      to: user.email,
      dynamic_template_data: {
        verificationLink,
      },
    })

    res.status(200).json(userCreated(user))
  } catch (error) {
    if (error.code === 'auth/email-already-exists') {
      res.status(202).json(emailAlreadyExist)
    } else {
      console.log(error)
    }
  }
}
