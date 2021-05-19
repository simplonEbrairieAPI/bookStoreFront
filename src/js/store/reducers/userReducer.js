import { SIGN_IN, LOAD, LOGOUT } from '../actions/userActions';

const initialState = {
  userId: null,
  isAuthenticated: false
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      // console.log("userId", action.cookie.userId)
      return {
        ...state,
        isAuthenticated: true,
        // userId: action.cookie.userId
      };
    case LOAD:
      return {
        ...state,
        isAuthenticated: true,
      }
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        // userId: null
      };

    default:
      return state;
  }
}
