import {
	API_HANDLE_USER_REGISTRATION_REQUEST,
	API_HANDLE_USER_REGISTRATION_SUCCESS,
	API_HANDLE_USER_REGISTRATION_FAILURE
} from '../../constants/actions';
  
const initialState = {
	error: null,
	timestamp: null,
	response: {},
	status: null
};

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case API_HANDLE_USER_REGISTRATION_REQUEST:
			return {
				...state,
				error: false,
				timestamp: new Date().toUTCString(),
				response: {},
				status: 'request'
			};
		case API_HANDLE_USER_REGISTRATION_SUCCESS:
			return {
				...state,
				error: false,
				timestamp: new Date().toUTCString(),
				response: action.response,
				status: 'success'
			};
		case API_HANDLE_USER_REGISTRATION_FAILURE:
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
  