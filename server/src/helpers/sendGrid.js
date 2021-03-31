import { config } from '../configs/env'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(config.SG_API_KEY)

const msgConfig = {
  emailVerification: {
    templateId: config.emailVerificationTemplateId,
  },
}

const sendEmail = 