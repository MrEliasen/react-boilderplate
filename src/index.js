/*
* @Author: Mark Eliasen
* @Date:   2017-03-01 17:29:24
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-04-12 15:30:19
*/

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './Components/app/App';
import Login from './Components/login/Login';

render(
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Login}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
