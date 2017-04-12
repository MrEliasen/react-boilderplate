/*
* @Author: Mark Eliasen
* @Date:   2017-03-01 17:29:24
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-03-28 16:51:20
*/

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './Components/app/App';
import Login from './Components/login/Login';
import Chat from './Components/chat/Chat';

render(
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Login}/>
            <Route path="/chat" component={Chat}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
