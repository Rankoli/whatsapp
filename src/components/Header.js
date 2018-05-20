import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="content-container">
        <div className="header__title">
          <h1>WhatsApp</h1>
        </div>
        <div className="header__content">
        <h4>CALLS</h4>
        <h4>CHATS</h4>
        <h4>CONTACT</h4>
      </div>
    </div>
  </header>
);

export default Header;
