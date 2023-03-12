import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjWU3XM0cJB3vYaxbEGDkxiMkX7foT1io",
  authDomain: "demoda-bb639.firebaseapp.com",
  projectId: "demoda-bb639",
  storageBucket: "demoda-bb639.appspot.com",
  messagingSenderId: "956283637349",
  appId: "1:956283637349:web:2225951f1a077e7321808c"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);