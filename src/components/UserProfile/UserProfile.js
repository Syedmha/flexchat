import React from 'react';
import './UserProfile.css';
import { auth } from './../../firebase/config';

const UserProfile = () => {
    const { uid, photoURL, email, Timestamp } = auth.currentUser;
    const displayName = auth.currentUser.displayName;

   const toggleInfo = (e) => {
      e.target.parentNode.classList.toggle("open");
    };

    return(
        <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src={photoURL} />
          </div>
          <h4>{displayName}</h4>
          <p>CEO & Founder at Highly Inc</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={toggleInfo} > 
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            <p> User Email: </p> <p>{email} </p>
          </div>
        </div>
        <div>
       { auth.currentUser && 
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>}
  
            </div>
      </div>
    )
};

export default UserProfile;
