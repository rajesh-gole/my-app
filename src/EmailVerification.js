// EmailVerification.js
import React from "react";
import firebase from "firebase/app";

export const EmailVerification = () => {
  const resendVerificationEmail = async () => {
    const user = firebase?.auth()?.currentUser;
    await user?.sendEmailVerification();
  };

  return (
    <div>
      <p>Please verify your email. Check your inbox and spam folder.</p>
      <button onClick={resendVerificationEmail}>
        Resend Verification Email
      </button>
    </div>
  );
};
