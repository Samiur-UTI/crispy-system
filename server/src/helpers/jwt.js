import jwt from 'jsonwebtoken'
import { config } from '../configs/env'

/**
 * @desc Create JSON web token
 * @param {Obj} payload Payload signs as token
 * @param {Number} expTime Token expiry time | default: none  | in Minutes
 * @returns token
 */

export const createToken = (payload, expTime = 'none') => {
  if (expTime === 'none') {
    return jwt.sign(payload, config.JWT_SECRET)
  } else {
    return jwt.sign(payload, config.JWT_SECRET, { expiresIn: 60 * expTime })
  }
}

/**
 * @desc Decode JWT token into payload
 * @param {string} token JWT Token
 * @returns {Object} decoded payload
 */

export const verifyToken = (token) => {
  return jwt.verify(token, config.JWT_SECRET)
}
