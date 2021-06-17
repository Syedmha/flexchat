import React from 'react';
import { auth, firestore } from './../../firebase/config';
import firebase from './../../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './../ChatMessage/ChatMessage.css';
import Avatar from './../ChatLIst/Avatar';
import moment from 'moment';


const ChatMessage = (props) => {
    const { text, uid, photoURL, createdAt, id } = props.message;
    const msgRef = firestore.collection('messages').doc(id);
     const date = createdAt && moment(createdAt.toDate()).format("Do MMM");
     const time = createdAt && moment(createdAt.toDate()).format('LT');
     
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    const delmsg = async (e) => {
      
        if (window.confirm('Are you sure you wish to delete this item?'))
        {
          
          await msgRef.delete()
        .catch((err) => alert(err.message));
        }

      e.preventDefault();
      
      
    }
  
    const user = auth.currentUser;

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
        style={{ animationDelay: `0.5s` }}
        className={`chat__item ${messageClass}`}>
        <div className="chat__item__content">
          <div className='textbox'>
            <div className="chat__msg">{text}</div> 
             <span className={`deletemsg ${messageClass}`} onClick={delmsg} ><i class="fa fa-trash" aria-hidden="true"></i></span>  
            
            </div>
          
          

          <div className="chat__meta">
            <span>{date}</span>
            <span>{time}</span>
          </div>
        </div>
        <Avatar isOnline="active" photoURL={photoURL} />
      </div>

    </>)
  }

  export default ChatMessage;
