import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';



export const Bubble = (props) => (
  <div className="content-container">

    <div>
      {
        props.messages.map((message,index) => {
            return (
              <div key={index + 0.2} className="chat-body">
               {
                 index % 2 === 0 ? (
                  <p key={index} className='my-chat-message'>{message} <span className="chat-message__time">{moment().format("Do MMMM YYYY HH:mm")}</span></p>
                 ) : (
                  <div key={index} className='contact-chat-message'>
                  <span className="chat-header">{props.name}</span>
                  <div className="chat-spacing">
                  <span>{message}</span>
                  <span className="chat-message__time">{moment().format("Do MMMM YYYY HH:mm")}</span>
                  </div>
                  </div>
                 )
               }
               </div>
            )
        })
      }
    </div>

  </div>
);

