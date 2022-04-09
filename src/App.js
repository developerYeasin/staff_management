
import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Components/Content/Contact/Contact';
import Login from './Components/Login/Login';
import AddMember from './Components/Pages/AddMember/AddMember';
import AllStaff from './Components/Pages/AllStaff/AllStaff';
import Chat from './Components/Pages/Chat/Chat';
import Home from './Components/Pages/Home/Home';
import NoPage from './Components/Pages/NoPage/NoPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { getUserFromsession } from './session';

export const UserContext = createContext();

const App = () => {

  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() =>{
    setLoggedInUser(getUserFromsession());
  }, [])
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="chat"
            element={
              <PrivateRoute>
                <Chat />
              </PrivateRoute>
            }
          />
          <Route
            path="all_staff"
            element={
              <PrivateRoute>
                <AllStaff />
              </PrivateRoute>
            }
          />
          <Route
            path="addMember"
            element={
              <PrivateRoute>
                <AddMember />
              </PrivateRoute>
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;