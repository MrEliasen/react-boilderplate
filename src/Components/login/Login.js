/*
* @Author: Mark Eliasen
* @Date:   2017-03-28 16:51:40
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-04-18 14:55:57
*/

import React from 'react';
import '../../Assets/styles/components/Buttons.scss';

class Login extends React.Component {
    constructor() {
        super();
    }

    doLogin(e) {
        e.preventDefault();
    }

    render() {
        return (
            <button onClick={(e) => this.doLogin(e)}>login</button>
        );
    }
};

export default Login;
