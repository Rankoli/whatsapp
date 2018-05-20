import React from 'react';
import {Link} from 'react-router-dom';
import FaIconPack from 'react-icons/lib/fa/arrow-left'

const HeaderUserChat = ({imgPath,name}) => (
    <header className="header">
      <div className="content-container">
          <div className="header__content__two">
            <Link to="/" className="header__title"><FaIconPack /></Link>
          <img src={imgPath} />
          <h4>{name}</h4>
        </div>
      </div>
    </header>
  );




  export default HeaderUserChat;