import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'

const firebaseConfigData = require('./firebaseConfigData.json')

export const app = initializeApp(firebaseConfigData)
export const storage = getStorage(app)