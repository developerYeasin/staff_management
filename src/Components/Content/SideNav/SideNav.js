import React, { useState } from "react";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { HiChatAlt2, HiUserAdd } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";

import "./SideNav.css";
import { removeUserFromsession } from "../../../session";

const SideNav = ({ active }) => {
  const [navi, setNavi] = useState(false);

  // const navigate = useNavigate();

  const signOut = () => {
    
    removeUserFromsession();
    setNavi(true);
  };

  return (
    <div className="side-bar">
      {navi && <Navigate to="/login" state={{ from: "/login" }} />}
      <h4>Staff management </h4>
      <ul className="side-menu">
        <li>
          <Link to="/">
            <span>
              <MdDashboardCustomize />
            </span>{" "}
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/all_staff"
            className={active === "AllStaff" ? "active" : "un"}
          >
            <span>
              <FaUsers />
            </span>
            All Staff
          </Link>
        </li>

        <li>
          <Link
            to="/addMember"
            className={active === "AddMember" ? "active" : "un"}
          >
            <span>
              <HiUserAdd />
            </span>
            Add Member
          </Link>
        </li>
        <li>
          <Link to="/chat">
            <span>
              <HiChatAlt2 />
            </span>
            Chat <small>3</small>
          </Link>
        </li>
        <li>
          <a onClick={signOut} style={{cursor: "pointer"}}>
            <span>
              <FiLogOut />
            </span>
            Log out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
