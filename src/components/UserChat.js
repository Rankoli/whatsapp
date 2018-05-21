import React from 'react';
import moment from 'moment';
import axios from 'axios';
import {Bubble} from './Bubble';
import HeaderUserChat from './HeaderUserChat';
import IoIconPack from 'react-icons/lib/io/android-send'


let b = 1;

export default class UserChat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: props.user.userId,
      time: props.user.time,
      lastMessage: props.user.lastMessage,
      myMessages: props.user.myMessages,
      contactMessages: props.user.contactMessages,
      name: props.user.name,
      imgPath: props.user.imgPath
    };

  };

  onMessageChange = (e) => {
    const lastMessage = e
      .target
      .value
      .trim();
    this.setState(() => ({
      lastMessage,
      time: moment().format("HH:mm"),
      myLastMessageTime: moment().valueOf()
    }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    e.target.elements.message.value = '';
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${b++}`)
      .then((Response) => {
        const user = Response.data;
        const {userId, id, title, completed} = user
        this.setState((prevState) => ({
          myMessages: prevState
            .myMessages
            .concat([this.state.lastMessage]),
          contactMessages: prevState
            .contactMessages
            .concat([title]),
          lastMessage: title
        }), () => {
          this
            .props
            .onSubmit({
              lastMessage: this.state.lastMessage,
              time: this
                .state
                .time
                .valueOf(),
              myMessages: this.state.myMessages,
              contactMessages: this.state.contactMessages
            });
        });

      });
  };

  render() {

    let x = 1;
    let y = 0;
    const messages = [];
    for (let index = 0; index < this.state.myMessages.length; index++) {
      messages[y] = this.state.myMessages[index];
      messages[x] = this.state.contactMessages[index];
      y += 2;
      x += 2;
    }

    return (
      <div className="chat-layout">
        <div className="chat-start">
        <HeaderUserChat name={this.state.name} imgPath={this.state.imgPath}/>
        <Bubble messages={messages} name={this.state.name}/>
        </div>

        <div className="message-input">
        <form className="form" onSubmit={this.onSubmit}>
          <input
            type="text"
            name="message"
            required
            placeholder="type message..."
            onChange={this.onMessageChange}
            className="text-input"
            /> &nbsp;
          <button className="button"><IoIconPack /></button>
        </form>
        </div>
      </div>
    )
  }
};
