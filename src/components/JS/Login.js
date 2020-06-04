import React, { Component } from 'react'
import axios from "axios";
import { Redirect } from 'react-router-dom';
import '../CSS/Login.css';
import { Button } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
        window.localStorage.setItem('token', res.data.token);
        this.setState({login: true})

      })
      .catch(function(error) {
        console.log(error);
      });
      
  }

  render() {
    return (
        
        <div className="main">
          <div className="form">
            
            <div className="bg-input" />
            <div>
              <input className="username" name="username" placeholder="Tên người dùng hoặc email" onChange={this.postUsername} />
            </div>
            <div>
              <input className="password" name="password" placeholder="Mật khẩu" type="password" onChange={this.postPassword} />
            </div>
            <Button style={{marginTop:20}} type="primary" onClick={this.postLogin}>
              Đăng nhập
            </Button>
              <div className="line"></div>
              <Link to='/forgetPass' className="link">Quên mật khẩu?</Link>
          </div>
          <div className="form register">
              <div style={{marginTop:10}}>Bạn không có tài khoản?</div>
              <Link to='/register'>Đăng ký</Link>
          </div>


          
            {this.state.login && (<Redirect
                to={{
                    pathname: "/",
                }}
            />
            )}

            
        </div>
    );
  }
}
