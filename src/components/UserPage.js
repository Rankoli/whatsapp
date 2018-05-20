import React from 'react';
import { connect } from 'react-redux';
import UserChat from './UserChat';
import { editUserList } from '../actions/useres';

const UserPage = (props) => {
  return (
    <div>
      <UserChat
        user={props.user}
        onSubmit={(user) => {
          props.dispatch(editUserList(props.user.userId, user));
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {

  return {
    user: state.useres.find((user) => user.userId.toString() === props.match.params.id)
  };
};

export default connect(mapStateToProps)(UserPage);
