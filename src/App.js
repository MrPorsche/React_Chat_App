import React, { useState, useRef } from "react";
import './App.css';


import firebase from 'firebase/compat/app';



import 'firebase/compat/auth';



import 'firebase/compat/firestore';
import 'firebase/analytics';

import {useAuthState} from 'react-firebase-hooks/auth';
import { useCollectionData } from "react-firebase-hooks/firestore";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

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
        <h1>Lets be Friendzzz 💬</h1>
        <SignOut />
      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(100);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const[formValue, setFormValue] = useState('');
  

  const sendMessage = async(e) => {
      e.preventDefault();

      const {uid,photoURL} = auth.currentUser;

      await messagesRef.add({
          text: formValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          photoURL
      })
      
      setFormValue('');
      dummy.current.scrollIntoView({behavior:'smooth'});
  }

  return (
      <>
          <main>

              {messages && messages.map(msg => <ChatMessage key = {msg.id} message = {msg} />)}
              <span ref={dummy}></span>
          </main>


          <form onSubmit={sendMessage}>

              <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Whats on your mind?"/>
              <button type="submit" disabled={!formValue}>🕊️</button>
          </form>
      </>
  )

}


function ChatMessage(props) {
  const {text, uid, photoURL} = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'receuved';

  return (
      <>
          <div className={`message ${messageClass}`}>
              <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="profile_image"/>
              <p>{text}</p>
          </div>
      </>
  )
}

export default App;

// https://console.firebase.google.com/u/0/project/react-chat-app-c2a09/settings/general/web:ZmFmNTU0NzQtYmI5ZC00MDRkLTgzZTEtNDNlNGQwNjhiYTc4?nonce=1698075891914
