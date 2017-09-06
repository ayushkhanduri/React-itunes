import React,{Component} from 'react';

import DashBoardUI from '../../presentational/Dashboard/DashboardUI.component';
import HeaderUI from '../../presentational/Dashboard/HeaderUI.component';
import SongCardUI from '../../presentational/Dashboard/SongCardUI.component';
import FilterComponent from './Filters.component';

export default class DashBoardContainer extends Component{

    constructor(){
        super();
        this.state = {
            searchedInput: "",
            songs: [],
            filteredDs: undefined,
            showFilters: false
        }
    }

    render(){
        return (
        <div id="dashboard">
            <HeaderUI/>
            <DashBoardUI inputValue = {this.state.searchedInput} 
            valueChanged={this.changeStateValue.bind(this)} toggleFilters={this.toggleFilters.bind(this)}
            getData={this.fetchApiData.bind(this)} addClass = {this.state.showFilters}/>
            {
                this.state.showFilters ?(<FilterComponent data = {this.state.songs} onChangeFilter = {this.changeDataSource.bind(this)}/>) : ""
            }
            { 
                this.state.songs.length > 0 ? (<SongCardUI songsArr = {this.state.filteredDs || this.state.songs}/> ) : ""
            }
            
        </div>);
    }

    changeDataSource(arr){
        this.setState({
            filteredDs: arr
        })
    }    

    changeStateValue(e){
        this.setState({
            searchedInput: e.target.value 
        });
    }

    toggleFilters(e){
        this.setState({
            showFilters: !this.state.showFilters
        })
        console.log("Filter changed" + this.state.showFilters );
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
} 