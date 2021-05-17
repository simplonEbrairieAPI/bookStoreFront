// import React from 'react';
// {
//   name: 'E-librarie',
//   init:false,
//   loading:false,
// }

import { INIT, READY, RESET } from '../actions/actions'

const initialState = {
  name: 'E-librarie',
  init: false,
  loading: false,
}

// action = {
//   type : 'ACTION NAME',
//   payload:data
// }

export default function rootReducer(state = initialState, action) {
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
// im the best :)
