import React from 'react';
import './ChatBody.css';
import ChatList from '../ChatLIst/ChatList';
import ChatContent from '../ChatContent/ChatContent';
import UserProfile from '../UserProfile/UserProfile';
// import {
//   Responsive,
//   getWindowDimension,
//   getDeviceTypeInfo,
//   isMobileDevice,
//   isTabletDevice,
//   isLaptopDevice,
//   isBiggerThanLaptop,
//   IDeviceInfo,
//   IWindowDimension
// } from 'typed-responsive-react';

const ChatBody = () => {

    return(
        <div className="main__chatbody">
          {/* <ChatList /> */}
          <ChatContent />
          <UserProfile />

          {/* <Responsive displayIn={["laptop"]}>
              <ChatList />
          </Responsive>

          <ChatContent />

          <Responsive displayIn={["laptop"]}>
              <UserProfile />
          </Responsive> */}
        {/*  */}
        {/* <UserProfile /> */}
      </div>
    )
};

export default ChatBody;
