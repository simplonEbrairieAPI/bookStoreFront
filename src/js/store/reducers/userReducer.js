import { SIGN_IN, LOAD, LOGOUT } from '../actions/userActions';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  userFirstName: null,
  userLastName: null,
  userEmail: null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case SIGN_IN:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        userFirstName: action.payload.firstName,
        userLastName: action.payload.lastName,
        userEmailName: action.payload.email,
      };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}
