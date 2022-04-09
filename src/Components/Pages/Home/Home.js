import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import Maddle from '../../Content/Maddle/Maddle';
import RightSide from '../../Content/RightSide/RightSide';
import SideNav from '../../Content/SideNav/SideNav';

const Home = () => {
  

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 side-bg-color">
            <SideNav />
          </div>
          <div className="col-md-7 offest-2 madle-bg-color">
            <Maddle/>
          </div>
          <div className="col-md-3 side-right-bg-color">
            <RightSide />
            
          </div>
        </div>
      </div>
    );
};

export default Home;