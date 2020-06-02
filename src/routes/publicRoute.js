import { Route } from 'react-dom';
import React from 'react';

const publicRoute = ({component: Component, ...rest}) => {
    return(
        <Route
            {...rest}
            render={props =>{
                return <Component {...props} />
            }}
        />
    );
};

export default publicRoute;