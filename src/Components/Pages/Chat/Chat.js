import React from 'react';
import ChatMaddle from '../../ChatMaddle/ChatMaddle';
import RightSide from '../../Content/RightSide/RightSide';
import SideNav from '../../Content/SideNav/SideNav';

const Chat = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 side-bg-color">
            <SideNav />
          </div>
          <div className="col-md-7 offest-2 madle-bg-color">
            <ChatMaddle/>
          </div>
          <div className="col-md-3 side-right-bg-color">
            <RightSide />
          </div>
        </div>
      </div>
    );
};

export default Chat;