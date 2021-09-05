import {
    OBJ_DATA,
  } from '../types';

  const initState = {
    objData: null,
  };

  const muqeetReducer = (state = initState, action) => {
    switch (action.type) {
      case OBJ_DATA:
        return {
          ...state,
          objData: action.payload,
        };

      default:
        return state;
    }
  };

  export default muqeetReducer;
