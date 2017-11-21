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
    apiKey: "AIzaSyA2Fb9GH-WlTNXIt_uTzL0spKti_WmS-7E",
    authDomain: "info343demo-73c95.firebaseapp.com",
    databaseURL: "https://info343demo-73c95.firebaseio.com",
    projectId: "info343demo-73c95",
    storageBucket: "info343demo-73c95.appspot.com",
    messagingSenderId: "655098764524"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
