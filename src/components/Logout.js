import React from "react";
import { useMsal } from "@azure/msal-react";
import "../App.css";

const LogoutButton = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutPopup().catch((e) => {
      console.error(e);
    });
  };

  return (
    <button className="logout" onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
