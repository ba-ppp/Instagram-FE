import React, { Component } from 'react';

export default class Register extends Component{
    constructor(){
        super();
        this.state ={
            username: '',
            email: '',
            password: '',
        }
        this.postUsername = this.postUsername.bind(this);
        this.postEmail = this.postEmail.bind(this);
        this.postPass = this.postPass.bind(this);
        this.register = this.register.bind(this);
    }
    postUsername(e){
        this.setState({username: e.target.value});

    }
    postEmail(e){
        this.setState({email: e.target.value});
    }
    postPass(e){
        this.setState({password: e.target.value});
    }
    register(e){
        
    }
    render(){
        return(
            <div>
                <div>
                    <label>Username</label>
                    <input name="username" onChange={this.postUsername}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input name="email" onChange={this.postEmail}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" onChange={this.postPass}></input>
                </div>
                <div>
                    <label>Avt</label>
                    <input></input>
                </div>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}