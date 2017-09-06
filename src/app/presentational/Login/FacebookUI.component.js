import React from 'react';

import './css/facebook-button.css';

const FacebookUI = ({clickHere}) => (
    <div className="login-center">
        <button onClick={clickHere} className="loginBtn loginBtn--facebook">
            Login with Facebook
        </button>
    </div>
);

export default FacebookUI;
