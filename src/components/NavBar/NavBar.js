import React from 'react';
import '../NavBar/NavBar.css';
import logoc from './../../images/logoc.svg';

const Navbar = () => {

    return(
        <div className="nav">
        <div className="nav__blocks">
          <img src={logoc}></img>
        </div>
        <div className="nav__blocks"></div>
        <div className="nav__blocks"></div>
      </div>

    )
};

export default Navbar;

