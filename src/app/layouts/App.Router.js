import React from 'react';
import { Router,Route,Redirect} from 'react-router';

import {checkAuth ,isAuthenticated} from './Auth';

import createBrowserHistory from 'history/createBrowserHistory';


import LoginContainer from  '../components/Login/LoginContainer.component';
import DashboardContainer from '../components/Dashboard/DashboardContainer.component';

const browserHistory = new createBrowserHistory();

const AppRouter = () => (
    <Router history={browserHistory}>
        <div>
            <Route exact render={()=>checkAuth("root",Redirect,Route,LoginContainer)} path="/"/>
            <Route exact render={()=>checkAuth("home",Redirect,Route,DashboardContainer)} path="/dashboard"/>
        </div>
    </Router>

);

//this would do https://gist.github.com/fdidron/ebcf52dc1ed62ff7d80725854d631a9e

export default AppRouter;