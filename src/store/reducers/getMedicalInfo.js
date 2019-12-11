import {
	API_MEDICAL_INFO_REQUEST,
	API_MEDICAL_INFO_SUCCESS,
	API_MEDICAL_INFO_FAILURE
} from '../../constants/actions';
  
const initialState = {
	error: null,
	timestamp: null,
	response: {},
	status: null
};

export default function reducer(state = initialState, action = {}) {
	switch (action.type) {
		case API_MEDICAL_INFO_REQUEST:
			return {
				...state,
				error: false,
				timestamp: new Date().toUTCString(),
				response: {},
				status: 'request'
			};
		case API_MEDICAL_INFO_SUCCESS:
			return {
				...state,
				error: false,
				timestamp: new Date().toUTCString(),
				response: action.response,
				status: 'success'
			};
		case API_MEDICAL_INFO_FAILURE:
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
  