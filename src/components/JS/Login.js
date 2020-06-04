import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
    this.postUsername = this.postUsername.bind(this);
    this.postPassword = this.postPassword.bind(this);
    this.postLogin = this.postLogin.bind(this);
  }
  postUsername(event) {
    this.setState({ username: event.target.value });
  }
  postPassword(event) {
    this.setState({ password: event.target.value });
  }

  postLogin(event) {
    const username = this.state.username;
    const password = this.state.password;
    const data = {
      username: username,
      password: password
    };
    console.log(data);
    axios
      .post("https://prs8c.sse.codesandbox.io/login", data)
      .then(res => {
        window.localStorage.setItem('token', res.data.token)
      })
      .catch(function(error) {
        console.log(error);
      });
      
  }

  render() {
    return (
      <div className="App">
        <div>
          <label>username </label>
          <input name="username" onChange={this.postUsername} />
        </div>
        <div>
          <label>password</label>
          <input name="password" type="password" onChange={this.postPassword} />
        </div>
        <button type="submit" onClick={this.postLogin}>
          Send
        </button>
      </div>
    );
  }
}
