/*
* @Author: Mark Eliasen
* @Date:   2017-03-01 17:45:14
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-04-12 15:03:52
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import App from './Components/app/App';
import Login from './Components/login/Login';
import Dashboard from './Components/dashboard/Dashboard';

const render = (Component) => ReactDOM.render(
    <AppContainer>
        <Component />
    </AppContainer>,
    document.getElementById('app')
);

render(
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Login}/>
            <Route path="/dash" component={Dashboard}/>
        </Route>
    </Router>
);

if (module.hot) {
    module.hot.accept('./app', () => {
        render(App);
    });
}
