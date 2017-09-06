    import React from 'react';

    const DashboardUI = ({getData}) =>(
        <div className="dashboard">
            <input type="text" className="form-control input-sm" />
            <button className="btn btn-default" onClick={getData}> Get Data</button>
        </div>
    );

    export default DashboardUI;