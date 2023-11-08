import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
  Link
} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";

import { Signup } from "./Signup";
import { EmailVerification } from "./EmailVerification";
import { TOTPRegistration } from "./TOTPRegistration";
import { Login } from "./Login";

function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/signup">SignUp</Link> &nbsp;
              <Link to="/verify-email">Verify Email</Link> &nbsp;
              <Link to="/register-totp">OTP</Link> &nbsp;
              <Link to="/login">Login</Link> &nbsp;
            </li>
          </ul>
        </nav>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/register-totp" element={<TOTPRegistration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
