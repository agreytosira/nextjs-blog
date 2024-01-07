// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: 'agrey-blog.firebaseapp.com',
    projectId: 'agrey-blog',
    storageBucket: 'agrey-blog.appspot.com',
    messagingSenderId: '540859672670',
    appId: '1:540859672670:web:9fc9fe5c90d4e0a8f76ccf'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
