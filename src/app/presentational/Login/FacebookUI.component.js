import React from 'react';

import './css/facebook-button.css';

const FacebookUI = ({clickHere}) => (
    <button onClick={clickHere} className="loginBtn loginBtn--facebook">
        Login with Facebook
    </button>
);

export default FacebookUI;
