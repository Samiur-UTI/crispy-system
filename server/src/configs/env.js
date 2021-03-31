require('dotenv').config()
export const config = {
  SG_Config: {
    SG_API_KEY: process.env.SG_API_KEY,
    EMAIL_VERIFICATION_TEMPLATE_ID: process.env.EMAIL_VERIFICATION_TEMPLATE_ID,
    FORGET_PASSWORD_TEMPLATE_ID: process.env.FORGET_PASSWORD_TEMPLATE_ID,
    SG_FROM_EMAIL: process.env.SG_FROM_EMAIL,
  },
  JWT_SECRET: process.env.JWT_SECRET
}
