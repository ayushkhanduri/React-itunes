import React from 'react';

import './css/filters.css';

const FiltersUI = ({applyFilter}) =>(
    <div className = "allFilters">
        <input type="text" onChange={(e)=>applyFilter(e,"artistName")} placeholder="Artist Name" className= "form-control input-sm input-class inline"/>
        <input type="text" onChange={(e)=>applyFilter(e,"primaryGenreName")} placeholder="Genre" className= "form-control input-sm input-class inline"/>
        <input type="range" onChange= {(e)=>applyFilter(e,"trackPrice")} min="0" max="10" defaultValue="1" className="slider inline" />
        <input type="range" onChange= {(e)=>applyFilter(e,"trackPrice")} min="0" max="10" defaultValue="1" className="slider inline" />
    
    </div>
)

export default FiltersUI;