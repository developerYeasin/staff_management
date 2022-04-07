import React from "react";
import RightSide from "../../Content/RightSide/RightSide";
import SideNav from "../../Content/SideNav/SideNav";
import AddForm from "./AddForm";

const AddMember = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 side-bg-color">
          <SideNav active={"AddMember"} />
        </div>
        <div className="col-md-7 offest-2 madle-bg-color">
          <div className="maddle">
            <div className="member-section">
              <div className="row">
                <div className="col-12">
                  <AddForm />
                </div>
              </div>
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

export default AddMember;
