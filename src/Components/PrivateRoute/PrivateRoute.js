import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../App";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return loggedInUser.username || loggedInUser.email  ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
