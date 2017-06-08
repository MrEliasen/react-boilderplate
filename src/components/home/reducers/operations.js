import actions from './actions';

const exampleMethod = () => (dispatch, getState) => {
    let newValue = null;

    if(getState().home.exampleReducer == true){
        newValue = null;
    } else {
        newValue = true;
    }

    dispatch(actions.example(newValue));
};

export default {
    exampleMethod,
};
