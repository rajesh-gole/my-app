import React, { useState } from "react";
import speakeasy from "speakeasy";

export const TOTPRegistration = () => {
  const [totpSecret, setTotpSecret] = useState("");
  const [totpCode, setTotpCode] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const handleGenerateTotp = () => {
    // Generate a new TOTP secret
    const secret = speakeasy.generateSecret({ length: 20, name: "YourApp" });

    // Store the secret in your backend or securely for future verification
    // You may send it to your backend API for storage

    // Get the provisioning URL for the QR code
    const provisioningUri = secret.otpauth_url;

    // Set the secret and QR code URL in the state
    setTotpSecret(secret.base32);
    setQrCodeUrl(provisioningUri);
  };

  const handleVerifyTotp = () => {
    // Verify the entered TOTP code
    const isValid = speakeasy?.totp?.verify({
      secret: totpSecret,
      encoding: "base32",
      token: totpCode
    });

    if (isValid) {
      // TOTP is valid, proceed to login or other actions
      console.log("TOTP is valid");
    } else {
      // TOTP is invalid
      console.log("TOTP is invalid");
    }
  };

  return (
    <div>
      <button onClick={handleGenerateTotp}>Generate TOTP</button>
      <p>Your TOTP Secret: {totpSecret}</p>

      {qrCodeUrl && (
        <div>
          <p>Scan this QR code with your TOTP app:</p>
          <img
            src={`https://chart.googleapis.com/chart?chs=200x200&chld=M|0&cht=qr&chl=${qrCodeUrl}`}
            alt="QR Code"
          />
        </div>
      )}

      <input
        type="text"
        placeholder="Enter TOTP code"
        value={totpCode}
        onChange={(e) => setTotpCode(e.target.value)}
      />
      <button onClick={handleVerifyTotp}>Verify TOTP</button>
    </div>
  );
};
