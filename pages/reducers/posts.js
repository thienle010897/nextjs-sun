import * as ActionTypes from '../constants';

const initialState = {
    posts : [],
    loading: false, 
    error: null,
    

};

const posts =  (state = initialState, { type, payload }) => {
  switch (type) {
    
    default:
      return state;
  }
};

export default posts;