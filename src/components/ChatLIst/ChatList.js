import React from 'react';
import './ChatList.css';
import { auth, firestore } from './../../firebase/config';
import firebase from './../../firebase/config';
import { useList } from 'react-firebase-hooks/database';


const ChatList = () => {

  const { uid, photoURL, displayName } = auth.currentUser;

  // const DatabaseList = () => {
  //   const [] = useList(firebase.database().ref('messages'));
  // }
  

  // const db = firestore.collection("users")
  //   .onSnapshot((querySnapshot) => {
  //       var user = [];
  //       querySnapshot.forEach((doc) => {
  //           user.add({
              
  //             createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //             uid,
  //             photoURL,
  //             displayName
  //           });
  //       });
  //       console.log("Current user: ", displayName);
  //   });

    return(
      <div className="main__chatlist">
        {/* <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button> */}
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    )
}
export default ChatList;
