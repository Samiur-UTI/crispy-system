import * as admin from 'firebase-admin'

export const signUp = async (req, res) => {
  try {
    const { email, password } = req.body
    const user =await admin.auth().createUser({
      email,
      password,
    })
    console.log(user)
    res.status(200).json({ message: 'user created' })
  } catch (error) {
    console.log(error.message.error)
  }
}
