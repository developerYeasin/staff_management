import React from "react";
import { Link } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUsers, FaHandsHelping } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { HiChatAlt2, HiDocumentDuplicate, HiUserAdd } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";

import "./SideNav.css";

const SideNav = ({active}) => {
  return (
    <div className="side-bar">
      <h4>Staff management </h4>
      <ul className="side-menu">
        <li>
          <Link to="/dashboard">
            <span>
              <MdDashboardCustomize />
            </span>{" "}
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/all_staff" className={active === "AllStaff" ? "active" : "un"} >
            <span>
              <FaUsers />
            </span>
            All Staff
          </Link>
        </li>

        <li>
          <Link to="/addMember" className={active === "AddMember" ? "active" :"un"}>
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
          <Link to="/login">
            <span>
              <FiLogOut />
            </span>
            Log out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
