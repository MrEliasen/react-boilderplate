/*
* @Author: Mark Eliasen
* @Date:   2017-03-28 16:51:40
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-04-12 15:29:35
*/

import React from 'react';

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
