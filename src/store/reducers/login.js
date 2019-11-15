import {
    LOGGED
} from '../../constraints/actions';

const initialState = {
    loggedIn: false
};

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOGGED:
            return {
                ...state,
                loggedIn: action.loggedIn
            };
        default:
            return state;
    }
}
