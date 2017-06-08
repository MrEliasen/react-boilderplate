/*
* @Author: Mark Eliasen
* @Date:   2017-06-08 13:53:24
* @Last Modified by:   Mark Eliasen
* @Last Modified time: 2017-06-08 14:39:51
*/

import {applyMiddleware, createStore, combineReducers} from 'redux';
import promise from 'redux-promise-middleware';
import * as reducers from './reducers';

const middleware = applyMiddleware(promise());
const defaultState = {
    home: {
        
    },
};


export default createStore(combineReducers(reducers), defaultState, middleware);
