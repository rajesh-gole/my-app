function userLogin(email, password, totp) {
  if (email === "rajesh@gmail.com" && password === "Rajesh123") {
    return true; // Successful login
  }
  return false; // Failed login
}

export default userLogin;
