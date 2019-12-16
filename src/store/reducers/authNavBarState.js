import { SET_AUTH_NAV_BAR } from '../../constants/actions';

const initialState = {
  opened: true
};

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case SET_AUTH_NAV_BAR:
      return {
        ...state,
        opened: !state.opened
      };
    default:
      return state;
  }
}
