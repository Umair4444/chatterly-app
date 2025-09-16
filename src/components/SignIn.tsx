"use client";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";

const SignIn = () => {
  const handleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <button onClick={handleSignIn}>SignIn</button>
    </div>
  );
};

export default SignIn;
