import { createToken } from './jwt'
import { sendEmail } from './sendGrid'

const createLink = (uid, route) => {
  const token = createToken({ uid }, 30)
  return `http://localhost:4000/api/${route}/${token}`
}

/**
 * @desc sendVerification Email
 * @param {string} uid user uid
 * @param {string} to user email
 */

export const sendVerificationEmail = async (uid, to) => {
  await sendEmail('emailVerification', {
    to,
    dynamic_template_data: {
      verificationLink: createLink(uid, 'authentication/verify'),
    },
  })
}
