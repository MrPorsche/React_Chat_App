import React, { useState } from 'react';
import './App.css';

import firebase from '../node_modules/firebase/compat/app';
import '../node_modules/firebase/compat/auth';
import '../node_modules/firebase/compat/firestore';
import '../node_modules/firebase/compat/analytics';
import {useAuthState} from '../node_modules/react-firebase-hooks/auth'; 
import SignOut from './Components/SignOut';
import SignIn from './Components/SignIn';
import ChatRoom from './Components/ChatRoom';

firebase.initializeApp({
  apiKey: "AIzaSyDMpHJdlXYmI1lV-JSjqCcZ9ipVAkb0SpI",
  authDomain: "react-chat-app-c2a09.firebaseapp.com",
  projectId: "react-chat-app-c2a09",
  databaseURL: "https://react-chat-app-c2a09.firebaseio.com",
  storageBucket: "react-chat-app-c2a09.appspot.com",
  messagingSenderId: "722151523245",
  appId: "1:722151523245:web:4a3f1db8355a8977c0d724",
  measurementId: "G-19KC6X1KGS"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {

  const[user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Welcome to a new "Lets be friendz!" Chat App.</h1>
        <SignOut />
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;

// https://console.firebase.google.com/u/0/project/react-chat-app-c2a09/settings/general/web:ZmFmNTU0NzQtYmI5ZC00MDRkLTgzZTEtNDNlNGQwNjhiYTc4?nonce=1698075891914
