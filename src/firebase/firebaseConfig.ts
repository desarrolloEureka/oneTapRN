import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAThTZvE3UaSio6WOSoYYegWjgXoTPSaaE',
  authDomain: 'onetap-f8d4f.firebaseapp.com',
  projectId: 'onetap-f8d4f',
  storageBucket: 'onetap-f8d4f.appspot.com',
  messagingSenderId: '442493372856',
  appId: '1:442493372856:web:3fc787fb060e5f516e674d',
  measurementId: 'G-6YM5SM23YD',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
