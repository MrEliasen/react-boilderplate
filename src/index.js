/*
* @Author: Mark Eliasen
* @Date:   2017-03-01 17:45:14
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-06-08 14:48:37
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import Routes from './routes';

// When building the app
if (process.env.NODE_ENV === 'production') {
    ReactDOM.render(
        <Routes />,
        document.getElementById('root')
    );
} else {
    // When developing the app
    const render = (Component) => {
      ReactDOM.render(
        <AppContainer>
          <Component />
        </AppContainer>,
        document.getElementById('root')
      );
    };

    render(Routes);

    if (module.hot) {
        module.hot.accept('./routes', () => {
            render(
                Routes
            );
        });
    }
}
