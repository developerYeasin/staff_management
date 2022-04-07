
import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Components/Content/Contact/Contact';
import Login from './Components/Login/Login';
import AddMember from './Components/Pages/AddMember/AddMember';
import AllStaff from './Components/Pages/AllStaff/AllStaff';
import Chat from './Components/Pages/Chat/Chat';
import Home from './Components/Pages/Home/Home';
import NoPage from './Components/Pages/NoPage/NoPage';

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/all_staff" element={<AllStaff />} />
          <Route path="/addMember" element={<AddMember />} />
          <Route path="/login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;