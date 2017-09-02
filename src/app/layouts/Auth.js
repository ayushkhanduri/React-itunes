import React from 'react';
//import {Redirect} from 'react-router';

export const isAuthenticated = () =>{
    const token = localStorage.getItem("Access_token");
    console.log("balle ");
    return token? true: false;
}

export const checkAuth =(value,Redirect,Route,PassedComponent) => {
    console.log(value);
    if(isAuthenticated() && value==="root"){
        return (<Redirect to="/dashboard"/>);
    }else if(!isAuthenticated() && value==="home"){
        return (<Redirect to="/"/>);
    }else if(isAuthenticated() && value==="home"){
        return (<Route to="/dashboard" component={PassedComponent}/>)
    }else if(!isAuthenticated() && value==="root"){
         return (<Route to="/dashboard" component={PassedComponent}/>)
    }
}