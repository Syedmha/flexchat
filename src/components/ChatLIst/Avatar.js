import React from 'react';
import { auth } from './../../firebase/config';

const Avatar = ({photoURL}) => {


    return (
        <div className="avatar">
        <div className="avatar-img">
          <img src={photoURL} alt="#" />
        </div>
        <span className={`isOnline ${'active'}`}></span>
      </div>
    )
};

export default Avatar;