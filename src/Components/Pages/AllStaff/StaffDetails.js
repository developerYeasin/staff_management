import React, { useState } from "react";

const StaffDetails = ({ handleClick, details }) => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [passcodeShow, setPasscodeShow] = useState(false);
  
  return (
    <div className="staff-details">
      <div className="form-group">
        <p>First name: {details && details.firstName}</p>
        <p>Last name: {details && details.firstName}</p>
        <p>Username: {details && details.firstName}</p>
        <p>Email : {details && details.firstName}</p>
        <p>
          Password: {passwordShow ? details.password : "*******"}
          <span
            className="ms-2 btn btn-outline-dark"
            onClick={() => setPasswordShow(!passwordShow)}
          >
            {passwordShow ? "hide" : "show"}
          </span>
        </p>
        <p>
          Passcode: {passcodeShow ? details.passcode : "*******"}
          <span
            className="ms-2 btn btn-outline-dark"
            onClick={() => setPasscodeShow(!passcodeShow)}
          >
            {passcodeShow ? "hide" : "show"}
          </span>
        </p>
      </div>
      <button className="ms-5 btn btn-dark" onClick={() => handleClick()}>
        Back
      </button>
      <button className="ms-5 btn btn-primary">update</button>
    </div>
  );
};

export default StaffDetails;
