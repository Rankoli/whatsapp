import React from 'react';
import { connect } from 'react-redux';
import UserListItem from './UserListItem';


const UserList = (props) => (
  <div className="content-container">
    <h1></h1>
    <div className="list-body">
    {
      props.useres.map((user) => {
      return <UserListItem key={user.userId} {...user} />;
    })
    }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    useres: state.useres
  };
};

export default connect(mapStateToProps)(UserList);

