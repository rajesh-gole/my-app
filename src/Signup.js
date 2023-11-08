// Signup.js
import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await firebase?.auth()?.createUserWithEmailAndPassword(email, password);
      const user = firebase?.auth()?.currentUser;
      await user?.sendEmailVerification();
      // Redirect to email verification page
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};
