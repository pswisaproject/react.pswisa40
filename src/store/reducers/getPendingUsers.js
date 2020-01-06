import {
	API_PENDING_USERS_REQUEST,
	API_PENDING_USERS_SUCCESS,
	API_PENDING_USERS_FAILURE
} from '../../constants/actions';
  
const initialState = {
	error: null,
	timestamp: null,
	response: {},
	status: null
};

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case API_PENDING_USERS_REQUEST:
			return {
				...state,
				error: false,
				timestamp: new Date().toUTCString(),
				response: {},
				status: 'request'
			};
		case API_PENDING_USERS_SUCCESS:
			return {
				...state,
				error: false,
				timestamp: new Date().toUTCString(),
				response: action.response,
				status: 'success'
			};
		case API_PENDING_USERS_FAILURE:
			return {
				...state,
				error: true,
				timestamp: new Date().toUTCString(),
				response: {},
				status: 'fail'
			};
		default:
			return state;
	}
}
  