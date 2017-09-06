import React,{Component} from 'react';

import DashBoardUI from '../../presentational/Dashboard/DashboardUI.component';
import HeaderUI from '../../presentational/Dashboard/HeaderUI.component';

export default class DashBoardContainer extends Component{

    render(){
        return (
        <div id="dashboard">
            <HeaderUI/>
            <DashBoardUI getData={this.fetchApiData.bind(this)}/>
        </div>);
    }

    fetchApiData(){
        
    }

    componentDidMount(){
        
    }
} 