import { Route, Redirect } from 'react-dom';
import React from 'react';

const privateRoute = ({ component: Component, ...rest }) => {
    const token = null //set token at here

    return(
       <Route 
       {...rest}
       render = {(props) => {
        if(!token){
            <Redirect to={{pathname: '/login'}} />
        }
        return <Component {...props}/>
       }}
       />
    )
};

export default privateRoute;