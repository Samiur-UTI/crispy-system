/**
 * @param {Obj} user
 * @returns message
 */
export const userCreated = (user) => {
  return {
    code: 'auth/user-created',
    message: `Account has been created for ${user.email}. We have sent a varification link to this email.
        Please, follow this link to verify your email.
        `,
  }
}


/**
 * 
 */
export const emailAlreadyExist = {
  code: 'auth/email-already-exists',
  message: 'The email address is already in use by another account.',
}
