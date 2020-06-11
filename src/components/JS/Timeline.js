import React, { Component } from 'react'
import axios from 'axios';

export default class Timeline extends Component{
    constructor(){
        super()
        this.state = {
           
        }
        this.onCLick = this.onCLick.bind(this)
    }
    
    
    onCLick(){
        this.setState({a: [1,2,3]})
    }
    render(){
        function sayHello(){
            console.log('hi')
        }
        return(
            <div>
                <button onClick={sayHello}>Like</button>
                <p></p>
            </div>
        )
    }
}