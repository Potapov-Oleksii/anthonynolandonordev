import React, { useState, useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest, passwordResetConfig } from "../authConfig";

const SignUpButton = () => {
  const { instance } = useMsal();
  const [loading, setLoading] = useState(false);
  const [passwordResetTriggered, setPasswordResetTriggered] = useState(false); // New state

  // Handle the initial redirect response
  useEffect(() => {
    instance
      .handleRedirectPromise()
      .then((response) => {
        if (response) {
          console.log("Redirect response:", response);
        }
      })
      .catch((error) => {
        console.error("Redirect handling error:", error);

        if (error.errorMessage && error.errorMessage.includes("AADB2C90118")) {
          console.log("Password reset required. Preparing to redirect...");
          // Set the state to trigger the password reset redirect
          setPasswordResetTriggered(true);
        }
      });
  }, [instance]);

  // Trigger the password reset flow when needed
  useEffect(() => {
    if (passwordResetTriggered) {
      setPasswordResetTriggered(false); // Reset the state to avoid infinite loop
      instance.loginRedirect({
        ...loginRequest,
        authority: passwordResetConfig.authority,
      });
    }
  }, [passwordResetTriggered, instance]);

  // Standard login handler
  const handleLogin = async () => {
    if (!loading) {
      setLoading(true);
      try {
        await instance.loginRedirect(loginRequest);
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <button className="button" onClick={handleLogin} disabled={loading}>
      {loading ? <span className="loader"></span> : "Continue"}
    </button>
  );
};

export default SignUpButton;
