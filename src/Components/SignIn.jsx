import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

function SignIn() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}></button>
            <p>Let's have fun together.</p>
        </>
    )
}

export default SignIn;