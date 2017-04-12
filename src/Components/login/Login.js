/*
* @Author: Mark Eliasen
* @Date:   2017-03-28 16:51:40
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-04-12 14:59:48
*/

import React from 'react';

class Login extends React.Component {
    constructor() {
        super();

        this.doLogin = this.doLogin.bind(this);
    }

    doLogin(e) {
        e.preventDefault();

        Twitch.login({
            scope: ['user_read', 'channel_read'],
            redirect_uri: 'http://localhost:3000',
        });
    }

    render() {
        return (
            <button
                onClick={(e) => this.doLogin(e)}
                className="btn btn-twitch btn-lg"
            ><i className="fa fa-twitch"></i> login</button>
        );
    }
};

export default Login;
