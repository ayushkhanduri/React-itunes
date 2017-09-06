import React,{Component} from 'react';

import FiltersUI from '../../presentational/Dashboard/FiltersUI.component';

export default class FilterComponent extends Component{
    
    constructor(){
        super();
        //all searches
        this.state = {
            allFilter : 
            {
                "artistName" : "",
                "primaryGenreName": "",
                "collectionName": ""
            }
        }
    }

    render(){
        return (<FiltersUI applyFilter={this.applyFilter.bind(this)}/>);
    }

    applyFilter(e,type){
        this.state.allFilter[type] = e.target.value;
        let newArr = this.props.data.slice();
        for(let key in this.state.allFilter){
            if (!this.state.allFilter[key]){ 
                continue;
            }else{
                newArr = newArr.filter((item,index)=>{
                    if(item[key])
                        return item[key].toLowerCase().search(this.state.allFilter[key]) !== -1; 
                    
                })
            }
        }
        

        console.log(newArr);
        this.props.onChangeFilter(newArr);
    }
}