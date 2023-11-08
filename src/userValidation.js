// userValidation.js (Your user signup validation logic)
function validateUserSignup(user) {
  // Your validation logic here
  if (user.email && user.password) {
    return true;
  }
  return false;
}

export default validateUserSignup;
