import verifyEmail from './testEmailVerification';

describe('Email Verification', () => {
  it('should keep email status as verified', () => {
    // Create a user with a verified email status
    const user = {
      emailVerified: true,
    };

    // Call the email verification function
    const verifiedUser = verifyEmail(user);

    // Assert that the email status remains verified
    expect(verifiedUser.emailVerified).toBe(true);
  });
});
