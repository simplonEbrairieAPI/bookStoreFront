import { SIGN_IN, LOAD, LOGOUT } from '../actions/userActions';

const initialState = {
  userId: null,
  isAuthenticated: false,
  userName: null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      // console.log("userId", action.cookie.userId)
      return {
        ...state,
        isAuthenticated: true,
        // userName:,
        //  userId: 
      };
    case LOAD:
      return {
        ...state,
        isAuthenticated: true,
        userId: action.payload
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
