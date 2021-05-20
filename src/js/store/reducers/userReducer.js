import { SIGN_IN, LOAD, LOGOUT } from '../actions/userActions';

const initialState = {
  user: null,
  isAuthenticated: false,
  userFirstName: null,
  userLastName: null,
  userEmail: null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      // console.log("userId", action.cookie.userId)
      return {
        ...state,
        isAuthenticated: true,
        userFirstName: action.payload.firstName,
        userLastName: action.payload.lastName,
        userEmailName: action.payload.email,


        //  userId: 
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
      };

    default:
      return state;
  }
}
