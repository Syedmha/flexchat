import {React, useState, useRef} from 'react';
import './ChatContent.css';
import { auth, firestore } from './../../firebase/config';
import firebase from './../../firebase/config';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './../ChatMessage/ChatMessage';
import Avatar from './../ChatLIst/Avatar';
import UserProfile from '../UserProfile/UserProfile';

const ChatContent = () => {

  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt');

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');
  const { uid, photoURL } = auth.currentUser;
  const displayName = auth.currentUser.displayName;



  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }


    return(
        <div className="main__chatcontent">
          
        <div className="content__header">
          <div className="blocks">
             <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                photoURL={photoURL}
              />
              <p>{displayName}</p>
            </div> 
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
          <main>

          {messages && messages.map( (msg) => <ChatMessage 
          // animationDelay={index + 2}
          key={msg.id} 
          message={msg}
           />)}

          <span ref={dummy}></span>

          </main>
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>

              <input 
              type='text'
              placeholder="Type a message here"
              value={formValue} 
              onChange={(e) => setFormValue(e.target.value)} 
               />
              <button type="submit" className="btnSendMsg" id="sendMsgBtn" onClick={sendMessage} >
               {/* disabled={!formValue} */}
              <i className="fa fa-paper-plane"></i>
              </button>
              

          </div>
        </div>
      </div>
    )
}

export default ChatContent;
