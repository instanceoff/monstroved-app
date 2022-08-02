// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbrGDyqL7j8xP-MDu2CZ_24GgQUUjX9QM',
  authDomain: 'monstrovedproject.firebaseapp.com',
  projectId: 'monstrovedproject',
  storageBucket: 'monstrovedproject.appspot.com',
  messagingSenderId: '4323445550',
  appId: '1:4323445550:web:731ff4db2a96695e4b08bf',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
