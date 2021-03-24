import { Component } from "react";
import Message from "../Message";
import Send from "../Send";
import "./Chat.css";
import { socket } from "./socket";

export default class Chat extends Component {
  state = {
    currentUser: "",
    messages: [],
    message: "",
    isLogin: false,
    users: {},
  };

  componentDidMount() {}

  inputName = () => {
    const user = this.state.currentUser;
    if (user !== "") {
      this.setState({ currentUser: user, isLogin: true });
    }
  };

  changeName = (e) => {
    this.setState({ currentUser: e.target.value });
  };
  render() {
    const { currentUser, isLogin, message, messages, users } = this.state;
    if (!isLogin) {
      return (
        <div className="login shadow-sm">
          <h4>Please, introduce yourself</h4>
          <input
            className="form-control"
            value={currentUser}
            onChange={this.changeName}
            placeholder="Enter your Nickname"
          />
          <button className="btn btn-primary" onClick={this.inputName}>
            Enter
          </button>
        </div>
      );
    }
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((item, key) => (
              <Message item={item} currentUser={currentUser} key={key} />
            ))}
          </div>
        </div>
        <Send
          value={message}
          onChange={this.changeMessage}
          onSend={this.sendMessage}
        />
        <ul className="list-group">
          {Object.values(users).map((el, i) => (
            <li className="list-group-item" key={i}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
