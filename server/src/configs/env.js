require('dotenv').config()
export const config = {
  SG_API_KEY: process.env.SG_API_KEY,
  emailVerificationTemplateId: process.env.EMAIL_VERIFICATION_TEMPLATE_ID,
}
