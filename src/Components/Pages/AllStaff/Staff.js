import React from "react";
import { BsClock } from "react-icons/bs";

const Staff = ({ handleClick, staff }) => {
  
  return (
    <div className="col-md-4">
      <div className="member-card" onClick={() => handleClick(staff)}>
        <div className="member-img">
          <img src="./image/lana.jpeg" alt="Jone Cooper" />
        </div>
        <h6 className="member-name">
          {" "}
          {staff && staff.firstName + staff.lastName} Jone Cooper
        </h6>
        <small className="member-title">Art Director</small>
        <div className="work-range">
          <span>
            <BsClock />
          </span>
          <div className="work-range-bg">
            <div className="work-tange-parcent" style={{ width: "80%" }}></div>
          </div>
          <p>
            <span>80</span>%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Staff;
