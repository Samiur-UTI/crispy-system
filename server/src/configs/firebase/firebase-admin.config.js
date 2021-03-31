import * as admin from 'firebase-admin'
import {adminSDK} from './adminSDK'

const initFirebaseAdmin = async () => {
  try {
    await admin.initializeApp({
      credential: admin.credential.cert(adminSDK),
    })
    console.log('Firebase Admin Initialized'.success)
  } catch (error) {
    console.log(error.message.error)
  }
}

export default initFirebaseAdmin
