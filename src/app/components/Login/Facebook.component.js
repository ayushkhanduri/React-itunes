import React,{Component} from 'react';
import FacebooUI from '../../presentational/Login/FacebookUI.component';

export default class FacebookComponent extends Component {

    render(){
        return(<FacebooUI clickHere = {this.checkUserLogin.bind(this)} />);
    }

    componentWillMount(){
        window.fbAsyncInit = ()=> {
            FB.init({
                appId      : '331811097280557',
                cookie     : true,
                xfbml      : true,
                version    : 'v2.10'
            });
            FB.AppEvents.logPageView();   
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        
    }

    checkUserLogin(){
        FB.login((response)=>{ 
            console.log(response);
            if(response.status === "connected" && response.authResponse){
                localStorage.setItem("Access_token",response.authResponse.accessToken);
                this.props.history.push('/dashboard');
            }else{
            }
        });
           
    }
}