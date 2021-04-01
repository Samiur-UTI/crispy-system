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
 * @desc email alreay exist
 */
export const emailAlreadyExist = {
  code: 'auth/email-already-exists',
  message: 'The email address is already in use by another account.',
}

/**
 * @desc reset link sent
 * @param {Object} user
 * @returns message
 */
export const resetLinkSent = ({ displayName, email }) => {
  return {
    code: 'auth/reset-link-sent',
    message: `Hello ${
      displayName !== undefined ? displayName : ''
    }, a password reset link has been sent to ${email}. Please follow this link to reset your password`,
  }
}

/**
 * @desc user not found
 */
export const userNotFound = {
  code: 'auth/user-not-found',
  message: 'There is no user registered corresponding to the provided email.',
}

/**
 * @desc password updated
 * @param {Object} user
 * @returns message
 */

export const passwordUpdated = ({ displayName }) => {
  return {
    code: 'auth/password-updated',
    message: `Hello ${
      displayName !== undefined ? displayName : ''
    }, your password has been updated`,
  }
}
