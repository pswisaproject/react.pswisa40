import { LOGGED } from '../../constants/actions';

function setLogged(loggedIn) {
    return {
        type: LOGGED,
        loggedIn
    };
}

export function changeLogged(loggedIn) {
    return dispatch => {
        return dispatch(setLogged(loggedIn));
    };
}
