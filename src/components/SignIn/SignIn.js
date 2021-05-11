import React from 'react';
import '../SignIn/SignIn.css';
import { auth } from './../../firebase/config';
import firebase from './../../firebase/config';
//import logoc from './../../images/logoc.svg';

const SignIn = () => {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }

    return (
            <div className='signin_main'>
                <div className='box'>
                {/* <img src={logoc}/> */}
                <h1> Welcome to Flexchat </h1>
                <p> Sign In to continue </p>
            <div>
            <button className="sign-in-btn" onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
            </div>
        </div>
    )
};

export default SignIn;