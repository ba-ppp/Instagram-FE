import React, { Component } from 'react'
import axios from 'axios';
import { Button, notification } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import '../CSS/CreatePass.css';
import {
    Link,
    Redirect
  } from "react-router-dom";
 class CreatePass extends Component{
     constructor(){
         super();
         this.state = {
             email: '',
             button: true
         }
         this.inputEmail = this.inputEmail.bind(this);
         this.send = this.send.bind(this);
     }

     inputEmail(e){
        this.setState({email: e.target.value});
        if(e.target.value.length >= 1){
            this.setState({button: false});
        }else{
            this.setState({button: true});
        }
     }

     send(e){
         let notifi = '';
        const openNotificationWithIcon = type => {
            notification[type]({
              message: 'Notification',
              description:
                notifi,
            });
          };
         const email ={
             email:  this.state.email
         };
        axios
            .post('https://prs8c.sse.codesandbox.io/forgetPass',email)
            .then((res) => {
                if(res.data === "No"){
                    notifi = "Email does not existed";
                    openNotificationWithIcon('warning');
                }else{
                    notifi = "We have send a new password to your email";
                    openNotificationWithIcon('success')
                }
            })
            .catch(err =>{
                console.log(err);
            })
     }
     render(){
        return(
            <div class="main">
                <div className="form forget-pass">
                    <div className="lock">
                        <LockOutlined style={{fontSize:50, marginTop: 10}}/>
                    </div>
                    <div style={{marginTop:10}}><b>Bạn gặp sự cố khi đăng nhập?</b></div>
                    <div style={{color:'#8e8e8e'}}>Hãy nhập tên người dùng hoặc email của bạn và<br /> chúng tôi sẽ gửi cho bạn liên kết để truy cập lại<br /> vào tài khoản.</div>
                    <input  className="input-forget" name="email" onChange={this.inputEmail} placeholder="Email hoặc tên người dùng"></input>
                    <div>
                        <Button onClick={this.send} type="primary" disabled={this.state.button}>Gửi lại mật khẩu mới</Button>
                    </div>
                    <div class="line" />
                    <Link to='/register'>Tạo tài khoản mới</Link>
                </div>
                <div className="form register">
                    <div style={{marginTop:15}}>
                        <Link to='/login' >Quay lại đăng nhập</Link>
                    </div>
                </div>
            </div>

        )
    }
}
export default CreatePass;