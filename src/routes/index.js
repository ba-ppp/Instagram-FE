import React from 'react';
import {
    BrowserRouter,
    Switch
} from 'react-dom';

import { } from '../containers' // add containers here
import PublicRoute from './publicRoute';
import PrivateRoute from './privateRoute';

const Routes = () => {
    return(
        //add routes here
        <BrowserRouter>
            <Switch> 
                {/* <PublicRoute path='/login' exact component={}> */}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;

