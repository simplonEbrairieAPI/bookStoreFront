import { INIT, READY, RESET } from '../actions/appActions';

const initialState = {
  name: 'E-librarie',
  init: false,
  loading: false,
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case INIT:
      return { ...state, loading: true };
    case READY:
      return { ...state, init: true, loading: false };
    case RESET:
      return initialState
    default:
      return state
  }
}