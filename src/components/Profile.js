import React from "react";
import { useMsal, useAccount } from "@azure/msal-react";
import "../App.css";

const Profile = () => {
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});

  console.log("account", account);
  return account ? (
    <div className="profileWrapper">
      <div className="profileTitle">
        <h1>Welcome, {account.name}!</h1>
      </div>
      <div className="userData">
        <div className="userDataRow">
          <b>Email:</b> {account.username || ""}
        </div>
        <div className="userDataRow">
          <b>Donor ID:</b>{" "}
          {account?.idTokenClaims.extension_DonorRegisterNumber || ""}
        </div>
        <div className="userDataRow">
          <b>Date Of Birth:</b>{" "}
          {account?.idTokenClaims?.extension_DateOfBirth || ""}
        </div>
        <div className="userDataRow">
          <b>Name: </b>
          {account?.idTokenClaims?.extension_FirstName || ""}
        </div>
      </div>
    </div>
  ) : (
    <p className="profileWrapper">
      <b>No user logged in</b>
    </p>
  );
};

export default Profile;
