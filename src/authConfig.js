// authConfig.js
export const msalConfig = {
  auth: {
    clientId: "95b9529c-a14b-404d-a917-66c4ffa83e0f", // Replace with your Application (client) ID
    authority:
      "https://anthonynolandonordev.b2clogin.com/anthonynolandonordev.onmicrosoft.com/B2C_1_sign_up_sign_in", // Replace <YOUR_TENANT_NAME>
    redirectUri: "https://red-river-08870a603.4.azurestaticapps.net/", // Must match the Redirect URI in Azure portal
    knownAuthorities: ["anthonynolandonordev.b2clogin.com"], // Replace <YOUR_TENANT_NAME>
  },
  cache: {
    cacheLocation: "localStorage", // Cache location (localStorage or sessionStorage)
    storeAuthStateInCookie: false, // Recommended to reduce cookies on modern browsers
  },
};

export const loginRequest = {
  scopes: ["openid", "profile", "offline_access"], // Add other scopes if needed
};
export const passwordResetConfig = {
  authority:
    "https://anthonynolandonordev.b2clogin.com/anthonynolandonordev.onmicrosoft.com/B2C_1_password_reset",
};
