import React, { useState, useEffect } from "react";
import RightSide from "../../Content/RightSide/RightSide";
import SideNav from "../../Content/SideNav/SideNav";
import Staff from "./Staff";
import StaffDetails from "./StaffDetails";

const AllStaff = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [staffs, setStaffs] = useState([]);
  const [details, setDetails] = useState({});

  const handleClick = (staff) => {
    setShowDetails(!showDetails);
    setDetails(staff);
  };

  useEffect(() => {
    const member = JSON.parse(sessionStorage.getItem("user"));
    setStaffs(member);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 side-bg-color">
          <SideNav active={"AllStaff"} />
        </div>
        <div className="col-md-7 offest-2 madle-bg-color">
          <div className="maddle">
            <div className="member-section">
              {!showDetails && (
                <div className="row">

                  {staffs &&
                    staffs.map((staff, i) => (
                      <Staff handleClick={handleClick} key={i} staff={staff} />
                    ))}

                  <Staff handleClick={handleClick} />
                </div>
              )}
              {showDetails && (
                <>
                  <StaffDetails handleClick={handleClick} details={details} />
                </>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-3 side-right-bg-color">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default AllStaff;
