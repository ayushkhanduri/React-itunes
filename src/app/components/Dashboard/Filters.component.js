import React,{Component} from 'react';

import FiltersUI from '../../presentational/Dashboard/FiltersUI.component';

export default class FilterComponent extends Component{
    
    constructor(){
        super();
        this.state = {
            allFilter : 
            {
                "artistName" : "",
                "primaryGenreName": "",
                "trackPrice": 0
            }
        }
    }

    render(){
        return (<FiltersUI applyFilter={this.applyFilter.bind(this)}/>);
    }

    applyFilter(e,type){
        this.state.allFilter[type] = e.target.value;
        let newArr = this.props.data;
        for(let key in this.state.allFilter){
            if (!this.state.allFilter[key]){ 
                continue;
            }else{
                if(key != "trackPrice"){
                    newArr = newArr.filter(item=>(
                        item[key].toLowerCase().search(e.target.value.toLowerCase()) !== -1
                    ))
                }else{
                    newArr = newArr.filter(item=>(
                        item[key] <= Number(e.target.value)
                    ))
                }
            }
        }
        // if(e.target.value){
        //     if(property !== "trackPrice"){
        //         newArr = this.props.data.filter(item=>(
        //             item[property].toLowerCase().search(e.target.value.toLowerCase()) !== -1
        //         )
        //     )}else{
        //         newArr = this.props.data.filter(item=>(
        //             item[property] <= Number(e.target.value)
        //         ))
        //     }
        // }else{
        //     newArr = this.props.data;
        // }

        console.log(newArr);
        this.props.onChangeFilter(newArr);
    }
}