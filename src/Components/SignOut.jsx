import { onAuthStateChanged } from "firebase/auth";
import React from "react";

function SignOut() {
    

    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.SignOut()}>Sign Out</button>
    )
}

export default SignOut;