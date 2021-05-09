import React from 'react';
import { auth } from './../../firebase/config';
import firebase from './../../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './../ChatMessage/ChatMessage.css';
import Avatar from './../ChatLIst/Avatar';
import moment from 'moment';


function ChatMessage(props) {
    const { text, uid, photoURL, createdAt} = props.message;
   
     const date = createdAt && moment(createdAt.toDate()).format("Do MMM");
     const time = createdAt && moment(createdAt.toDate()).format('LT'); 
    //const time = createdAt && (createdAt.seconds * 1000).toLocaleDateString("en-US")
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>

      {/* <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}
        <div className="chat__meta">
            <span>16 mins ago</span>
            <span>Seen 1.03PM</span>
          </div>
          </p>
      </div> */}

      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${messageClass}`}>
        <div className="chat__item__content">
          <div className="chat__msg">{text}</div>
          <div className="chat__meta">
            {/* <span> {`${createdAt}`}</span> */}
            <span>{date}</span>
            <span>{time}</span>
          </div>
        </div>
        <Avatar isOnline="active" photoURL={photoURL} />
      </div>

    </>)
  }

  export default ChatMessage;
