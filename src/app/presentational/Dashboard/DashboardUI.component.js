    import React from 'react';

    const DashboardUI = ({inputValue,getData,valueChanged}) =>(
        <div className="dashboard">
            <input type="text" value= {inputValue} onChange={(event)=>valueChanged(event)} className="form-control input-sm" />
            <button className="btn btn-default" onClick={getData}> Get Data</button>
        </div>
    );

    export default DashboardUI;
