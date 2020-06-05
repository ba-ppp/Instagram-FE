import React, { Component } from 'react'
import axios from "axios";
import { Redirect } from 'react-router-dom';
import '../CSS/Login.css';
import { Button } from 'antd';
import {
  Link
} from "react-router-dom";
import { notification, Space } from 'antd';
const openNotificationWithIcon = (type,err) => {
  notification[type]({
    message: 'Login failed',
    description:
      err
  });
};

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: "",
      button: true
    };
    this.postUsername = this.postUsername.bind(this);
    this.postPassword = this.postPassword.bind(this);
    this.postLogin = this.postLogin.bind(this);
  }
  async postUsername(event) {
    await this.setState({ username: event.target.value });
    if(this.state.username.length > 0 && this.state.password.length >= 6){
      this.setState({button: false});
    }else{
      this.setState({button: true});
    }
    
  }
  async postPassword(event) {
    await this.setState({ password: event.target.value });
    if(this.state.username.length > 0 && this.state.password.length >= 6){
      this.setState({button: false});
    }else{
      this.setState({button: true});
    }
  }

  postLogin(event) {
    const username = this.state.username;
    const password = this.state.password;
    const data = {
      username: username,
      password: password
    };
    axios
      .post("https://prs8c.sse.codesandbox.io/login", data)
      .then(res => {
        if(!res.data.errors.length){
          window.localStorage.setItem('token', res.data.token);
          this.setState({login: true});
        }else{
          let error = res.data.errors.toString();
          openNotificationWithIcon('error',error);
        }
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
            <Button style={{marginTop:20}} type="primary" onClick={this.postLogin} disabled={this.state.button}>
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
