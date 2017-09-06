import React,{Component} from 'react';

import DashBoardUI from '../../presentational/Dashboard/DashboardUI.component';
import HeaderUI from '../../presentational/Dashboard/HeaderUI.component';
import SongCardUI from '../../presentational/Dashboard/SongCardUI.component';

export default class DashBoardContainer extends Component{

    constructor(){
        super();
        this.state = {
            searchedInput: "",
            songs: []
        }
    }

    render(){
        return (
        <div id="dashboard">
            <HeaderUI/>
            <DashBoardUI inputValue = {this.state.searchedInput} 
            valueChanged={this.changeStateValue.bind(this)} 
            getData={this.fetchApiData.bind(this)}/>
            <SongCardUI songsArr = {this.state.songs}/>
        </div>);
    }

    changeStateValue(e){
        this.setState({
            searchedInput: e.target.value 
        });
    }

    fetchApiData(){
        let url ="https://itunes.apple.com/search?term=";
        let regEx = new RegExp(' ','g');
        let searchedName = this.state.searchedInput.replace(regEx,'+');
        url += searchedName;
        fetch(url).then(resStream=> resStream.json()).then(jsonArr=>{
            console.log(jsonArr.results);
            this.setState({
                songs: jsonArr.results
            })
        });
    }

    componentDidMount(){
        
    }
} 