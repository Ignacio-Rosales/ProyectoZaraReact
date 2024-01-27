import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Resto del código

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAN-SEFBA1wN3mvhgKf84xo2r4oRuOCDo",
  authDomain: "ecommercezaracoder.firebaseapp.com",
  projectId: "ecommercezaracoder",
  storageBucket: "ecommercezaracoder.appspot.com",
  messagingSenderId: "108563281397",
  appId: "1:108563281397:web:8434a60cbdbc6aed07dcbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
)
