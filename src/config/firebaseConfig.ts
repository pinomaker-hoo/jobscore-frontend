// ** Firebase Imports
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCNGcbLn9wOPoK9ZbqsiFBcDwfwjl8v0Go',
  authDomain: 'jobscore-24472.firebaseapp.com',
  projectId: 'jobscore-24472',
  storageBucket: 'jobscore-24472.appspot.com',
  messagingSenderId: '362585290695',
  appId: '1:362585290695:web:74a6d784e2b0bd5582cbe2',
  measurementId: 'G-0CS91SZR6T',
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)
