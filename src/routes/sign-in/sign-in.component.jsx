import React from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
export default function SignIn() {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      console.log(user);
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sigin in with Google</button>
    </div>
  );
}
