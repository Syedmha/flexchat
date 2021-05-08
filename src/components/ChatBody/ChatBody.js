import React from 'react';
import './ChatBody.css';
import ChatList from '../ChatLIst/ChatList';
import ChatContent from '../ChatContent/ChatContent';
import UserProfile from '../UserProfile/UserProfile';

const ChatBody = () => {

    return(
        <div className="main__chatbody">
        <ChatList />
        <ChatContent />
        <UserProfile />
      </div>
    )
};

export default ChatBody;
