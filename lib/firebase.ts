import firebase from "firebase"

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

if (!firebase.apps.length) {
  console.log(config)
  if(window.atob) {
    console.log(JSON.parse(atob(process.env.GCLOUD_CREDENTIALS || "")))
  } else {
    console.log(JSON.parse(Buffer.from(process.env.GCLOUD_CREDENTIALS || "", 'base64').toString()))
  }
  firebase.initializeApp(config)
}

export default firebase
