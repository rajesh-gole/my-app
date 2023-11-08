import userLogin from "./userLogin";

describe("User Login", () => {
  it("should log in with correct email, password, and TOTP", () => {
    // Attempt to log in with the correct credentials
    const email = "rajesh@gmail.com";
    const password = "Rajesh123";

    const isLoggedIn = userLogin(email, password);

    // Assert that the login is successful
    expect(isLoggedIn).toBe(true);
  });

  it("should fail to log in with incorrect email, password", () => {
    // Attempt to log in with incorrect credentials
    const email = "rajeshhhhh@gmail.com";
    const password = "1234";

    const isLoggedIn = userLogin(email, password);

    // Assert that the login fails
    expect(isLoggedIn).toBe(false);
  });
});
