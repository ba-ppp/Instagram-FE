import React, { Component } from "react";
import "../CSS/Main.css";
import { Avatar } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import Timeline from "./Timeline";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: true
    };
  }
  render() {
    return (
      <Router>
        <div className="taskbar">
          <div className="taskbar-body">
            <div>
              <a href="https://www.instagram.com">
                <div className="insta" />
              </a>
            </div>
            <div className="bor-input">
              <input type="text" className="find" placeholder="Tìm kiếm" />
            </div>
            <div className="icon">
              <a href="/">
                <span className="home">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-home"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </span>
              </a>
              <a href="https://www.instagram.com/direct/inbox/">
                <span className="send">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-send"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </span>
              </a>
              <a href="https://www.instagram.com/explore/">
                <span className="compass">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-compass"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                </span>
              </a>
              <a href="#">
                <span className="heart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-heart"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </span>
              </a>
              <span className="profile-av">
                <Link
                  to="/profile"
                  onClick={() => {
                    this.setState({ timeline: false });
                  }}
                >
                  <Avatar src="https://raw.githubusercontent.com/ba-p/Instagram/master/images/735145cfe0a4.png" />
                </Link>
              </span>
            </div>
          </div>
        </div>
        {this.state.timeline && <Timeline />}

        <Switch>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    );
  }
}
