import * as ActionTypes from '../constants';

const initialState = {
    careers : [],
    loading: false, 
    error: null,
    

};

const careers =  (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOAD_CAREERS_START:
        return {
          ...state,
          loading: true,
        };
  
      case ActionTypes.LOAD_CAREERS_SUCCESS:
        return {
            ...state,
            loading: false,
            careers: payload
        };
  
      case ActionTypes.LOAD_CAREERS_ERROR:
        return {
          ...state,
          loading: false,
          error: payload
        }
    
    default:
      return state;
  }
};

export default careers;