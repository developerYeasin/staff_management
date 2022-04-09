import React, { useState } from "react";

const AddForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passcode, setPasscode] = useState("");
  const [member, setMember] = useState([]);

  const handleInfo = (e) => {
    e.preventDefault();
    if (firstName === "" || lastName === "") {
      alert("firstname and lastname need");
    }
    if (email === "") {
      alert("email need");
    }
    if (password === "") {
      alert("password need");
    } 
    if (firstName && email) {
      const newMemberInfo = {
        firstName,
        lastName,
        username,
        email,
        password,
        passcode,
      };
      addToSession(newMemberInfo);
    }
  };

  const addToSession = (staff) => {
    if (!JSON.parse(window.sessionStorage.getItem("staffs"))) {
      window.sessionStorage.setItem("staffs", JSON.stringify(staff));
    }
    setMember(JSON.parse(window.sessionStorage.getItem("staffs")));
    const addNewMember = [member, staff];

    window.sessionStorage.setItem("staffs", JSON.stringify(addNewMember));
    alert("Staff added");
  };

  return (
    <div>
      <form>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="Username">Username</label>
            <input
              type="email"
              className="form-control"
              id="Username"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              className="form-control"
              id="Email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Password</label>
            <input
              type="password"
              className="form-control"
              id="Password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Passcode">Passcode</label>
            <input
              type="password"
              className="form-control"
              id="Passcode"
              name="passcode"
              placeholder="Passcode"
              onChange={(e) => setPasscode(e.target.value)}
            />
          </div>
        </div>

        <button onClick={handleInfo} type="submit" className="btn btn-primary">
          Add New Member
        </button>
      </form>
    </div>
  );
};

export default AddForm;
