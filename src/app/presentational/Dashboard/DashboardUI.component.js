    import React from 'react';

    import './css/dashboard.css';

    const DashboardUI = ({inputValue,getData,valueChanged,toggleFilters,addClass}) =>(
        <div className="dashboard">
            <input type="text" value= {inputValue} onChange={(event)=>valueChanged(event)} className="form-control input-sm input-class inline" />
            <button className="btn btn-default inline" onClick={getData}> Get Data</button>
            <button className={(()=>{
                    let defaultName = "btn btn-default inline ";
                    return (addClass)?defaultName+"active": defaultName ;
                })()} onClick={toggleFilters}>Apply Filters</button>
        </div>
    );

    export default DashboardUI;
