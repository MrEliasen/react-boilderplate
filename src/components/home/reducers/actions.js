import types from './types';

const example = (key, data) => ({
    type: types.EXAMPLE,
    payload: {key, data},
});

export default {
    example,
};
