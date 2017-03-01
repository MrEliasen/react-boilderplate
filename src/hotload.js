/*
* @Author: Mark Eliasen
* @Date:   2017-03-01 17:45:14
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-03-01 17:45:34
*/

import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const render = Component => ReactDOM.render(
    <AppContainer>
        <Component />
    </AppContainer>,
    document.getElementById('app')
);

render(App);

if (module.hot) {
    module.hot.accept('./App', () => render(App));
}