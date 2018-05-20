import React from 'react';
import {Link} from 'react-router-dom';

const UserListItem = ({userId, name, lastMessage, time, imgPath}) => (
  <div>
    <Link className="list-item" to={`/UserPage/${userId}`}>
      <div className="list-item__direction">
        <img src={imgPath}/>
        <div className="list-item__title-and-subtitle">
        <h3 className="list-item__title">{name}</h3>
        <p className="list-item__subtitle">{lastMessage}</p>
        </div>
        <p className="list-item__data">{time}</p>
      </div>

    </Link>
  </div>
);

export default UserListItem;
