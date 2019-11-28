import {
	API_LOGIN_SUCCESS
} from '../../constants/actions';
  
const initialState = {
	Ht: null,
};

export default function reducer (state = initialState, action = {}) {
	switch (action.type) {
    case API_LOGIN_SUCCESS:
    return {
        ...state,
        Ht: action.response.data.Ht,
    };
    default:
    return state;
	}
}
