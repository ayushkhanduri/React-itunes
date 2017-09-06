import React,{ Component } from 'react';

import FacebookComponent  from './Facebook.component';

import LoginHeaderUI from '../../presentational/Login/LoginHeaderUI.component';


export default class LoginContainer extends Component{
    render(){
        console.log(this.props);
        const { history } = this.props;
        return(
            <div>
                <LoginHeaderUI/>
                <FacebookComponent history = {history}/>
            </div>
        )
    }
}