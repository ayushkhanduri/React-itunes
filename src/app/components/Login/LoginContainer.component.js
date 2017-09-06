import React,{ Component } from 'react';

import FacebookComponent  from './Facebook.component';

import LoginUI from '../../presentational/Login/LoginUI.component';


export default class LoginContainer extends Component{
    render(){
        console.log(this.props);
        const { history } = this.props;
        return(
            <div>
                <LoginUI/>
                <FacebookComponent history = {history}/>
            </div>
        )
    }
}