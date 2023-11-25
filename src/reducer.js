import { SET_USER_DETAILS } from './actions';

const initialState = {
  userDetails: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        userDetails: action.payload,
      };
    default:
      return state;
  }
}