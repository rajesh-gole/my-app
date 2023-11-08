function verifyEmail(user) {
  user.emailVerified = true;
  return user;
}

export default verifyEmail;
