/*
* @Author: Mark Eliasen
* @Date:   2017-03-01 17:45:14
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-04-30 00:02:36
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import App from './Components/Routes';

if (process.env.NODE_ENV === 'production') {
    ReactDOM.render(<App/>, document.getElementById('root'));
} else {
    const render = (Component) => {
      ReactDOM.render(
        <AppContainer>
          <Component />
        </AppContainer>,
        document.getElementById('root')
      );
    };

    render(App);

    if (module.hot) {
        module.hot.accept('./Components/Routes', () => {
            render(App);
        });
    }
}
