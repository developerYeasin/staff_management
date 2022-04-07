import React, { useContext, useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const Login = () => {
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    if(username === "" || password === ""){
        alert("fill all the field");
    }
    if(password.length < 8){
        alert("password should be 8");
    }
    else{
      setLoggedInUser(username, password);
        navigate('/');
    }
  };

  return (
    <div className="bg-dark login">
      <div className="container ">
        <div className="row">
          <div className="col-12 text-center pt-5 mt-2">
            <h2>Staff Management</h2>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-5 m-auto">
            <div className="card p-5 bg-dark login-form">
              <form action="#">
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={(e) => setpassword(e.target.value)}
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="text-center">
                  <button onClick={handleSignIn} className="btn btn-dark">
                    login
                  </button>
                </div>
              </form>
              <button className="google-btn mt-2">
                <FcGoogle /> Logoin With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
