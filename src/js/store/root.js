// import React from 'react';
// {
//   name: 'E-librarie',
//   init:false,
//   loading:false,
// }
const initialState = {
  name: 'E-librarie',
  init: false,
  loading: false,
}

// action = {
//   type : 'ACTION NAME',
//   payload:data
// }

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'APP_INIT':
      return { ...state, loading: true };
    case 'APP_READY':
      return { ...state, init: true, loading: false };
    case 'APP_RESET':
      return initialState
    default:
      return state
  }
}
// im the best :)
export default rootReducer