/*
* @Author: Mark Eliasen
* @Date:   2017-04-18 15:00:31
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-06-08 14:45:14
*/

import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import Store from './store';
import App from './components/app/app';
import Home from './components/home/home';

class Routes extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <Router history={hashHistory}>
                    <Route component={App}>
                        <Route path="/" component={Home}/>
                    </Route>
                </Router>
            </Provider>
        );
    }
}

export default Routes;
