import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBhstTTcni9-4GGLyhuPdW3-_eb5Z__LTA",
    authDomain: "info343tasks-e6c80.firebaseapp.com",
    databaseURL: "https://info343tasks-e6c80.firebaseio.com",
    projectId: "info343tasks-e6c80",
    storageBucket: "info343tasks-e6c80.appspot.com",
    messagingSenderId: "1090566582180"
  };
firebase.initializeApp(config);

firebase.auth().signInAnonymously()
  .then(() => {
        ReactDOM.render(<App />, document.getElementById('root'));
        registerServiceWorker();
  })
  .catch(err => console.error(err));

