import React from "react";


function SignIn(firebase,auth) {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
            <p>Let's have fun together.</p>
        </>
    )
  }

export default SignIn;