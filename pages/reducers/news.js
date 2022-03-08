import * as ActionTypes from '../constants';

const initialState = {
    news : [],
    loading: false, 
    error: null,
    

};

const news =  (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOAD_NEWS_START:
        return {
          ...state,
          loading: true,
        };
  
      case ActionTypes.LOAD_NEWS_SUCCESS:
        return {
            ...state,
            loading: false,
            news: payload
        };
  
      case ActionTypes.LOAD_NEWS_ERROR:
        return {
          ...state,
          loading: false,
          error: payload
        }
    
    default:
      return state;
  }
};

export default news;