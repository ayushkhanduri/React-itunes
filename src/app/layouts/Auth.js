import React from 'react';
import {Redirect,Route} from 'react-router';

const PRIVATE_ROUTE= "/dashboard";
const PUBLIC_ROUTE = "/";

// const AuthRoute = (props) =>{
//     const { isPrivate } = props;
//     const { component } = props;
//     const { path } =  props;
//     if(isAuthenticated()){
//         if(isPrivate){
//             return <Route exact to= {path} component = {component}/>;
//         }else{
//             return <Redirect exact to = {PRIVATE_ROUTE}/>;
//         }
//     }else{
//         if(isPrivate){
//             return <Redirect exact to = {PUBLIC_ROUTE}/>;
//         }else{
//             return <Route exact to= {path} component = {component}/>;
//         }
//     }
// }


const isAuthenticated = () =>{
    const token = localStorage.getItem("Access_token");
    return token? true: false;
}

export const checkAuth =(value,PassedComponent) => {
    const isPrivate = (value.indexOf("dashboard") !== -1) ? true : false;
    if(isAuthenticated()){
        if(isPrivate){
            return (<Route exact to={value} component={PassedComponent}/>)
        }else{
            return (<Redirect to={PRIVATE_ROUTE}/>);
        }
    }else{
        if(isPrivate){
            return (<Redirect to={PUBLIC_ROUTE}/>)
        }else{
            return (<Route exact to={value} component={PassedComponent}/>)
        }
    }
}
