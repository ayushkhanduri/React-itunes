    import React from 'react';

    import './css/dashboard.css';

    const DashboardUI = ({inputValue,numberValue,getData,valueChanged,toggleFilters,addClass}) =>(
        <div className="dashboard">
            <form onSubmit = {(event)=>getData(event)}>
                <input type="text" value= {inputValue} onChange={(event)=>valueChanged(event,"text")} className="form-control input-sm input-class inline" />
                <input type="number" min="10" max="50" value= {numberValue} onChange={(event)=>valueChanged(event,"number")} className="form-control input-sm input-class inline" />
                <button type = "submit" className="btn btn-default inline"> Get Data</button>
                <button className={(()=>{
                        let defaultName = "btn btn-default inline ";
                        return (addClass)?defaultName+"active": defaultName ;
                    })()} onClick={toggleFilters}>Apply Filters</button>
            </form>
        </div>
    );

    export default DashboardUI;
