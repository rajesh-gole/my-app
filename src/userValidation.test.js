// userValidation.test.js
import validateUserSignup from "./userValidation"; // Import your validation function

describe("User Signup Validation", () => {
  it("should return true for valid user data", () => {
    const validUserData = {
      email: "rajesh@gmail.com",
      password: "Rajesh123"
    };

    const isValid = validateUserSignup(validUserData);

    expect(isValid).toBe(true);
  });

  it("should return false for missing user data", () => {
    const invalidUserData = {
      eamil: "rajesh@gmail.com"
    };

    const isValid = validateUserSignup(invalidUserData);

    expect(isValid).toBe(false);
  });
});
