import { config } from '../configs/env'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(config.SG_Config.SG_API_KEY)

const msgConfig = {
  emailVerification: {
    templateId: config.SG_Config.EMAIL_VERIFICATION_TEMPLATE_ID,
  },
  forgetPassword: {
    templateId: config.SG_Config.FORGET_PASSWORD_TEMPLATE_ID
  },
}

/**
 *
 * @param {String} type  [emailVerification, forgetPassword]
 * @param {String} link Link to follow
 * @param {Object} emailProps  { to: 'user email', dynamic_template_data: {name: '', verificationLink: '', forgetPasswordLink: ''} }
 */

export const sendEmail = async (type, emailProps) => {
  try {
    const msg = {
      to: emailProps.to,
      from: config.SG_Config.SG_FROM_EMAIL,
      templateId: msgConfig[type].templateId,
      dynamic_template_data: emailProps.dynamic_template_data,
    }
    await sgMail.send(msg)
    console.log('Email Sent'.success)
  } catch (error) {
    console.log(error)
  }
}

