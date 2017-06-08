import {combineReducers} from 'redux';
import types from './types';

const exampleReducer = (state = {}, action) => {
    switch (action.type) {
        case types.EXAMPLE:
            return {
                ...state,
                [action.payload.key]: action.payload.value,
            };

        default:
            return state;
    }
};

const reducer = combineReducers({
    example: exampleReducer,
});

export default reducer;
