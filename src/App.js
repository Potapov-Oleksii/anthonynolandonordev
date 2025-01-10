import React from "react";
import SignUpButton from "./components/SignUpButton";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import "./App.css";
import { useMsal, useAccount } from "@azure/msal-react";

const App = () => {
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});

  console.log("account@@@@@", account);
  return (
    <div className="mainContainer">
      <Profile />
      {!account && <SignUpButton />}

      <Logout />
    </div>
  );
};

export default App;
