// ** Firebase Imports
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCoeuKTFLjqU9k6XqUezvRQszWYmlninN0',
  authDomain: 'jobscore-ad104.firebaseapp.com',
  projectId: 'jobscore-ad104',
  storageBucket: 'jobscore-ad104.appspot.com',
  messagingSenderId: '631261665918',
  appId: '1:631261665918:web:5bfd407b27c90af923d62f',
  measurementId: 'G-4EWY41D55B',
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)
