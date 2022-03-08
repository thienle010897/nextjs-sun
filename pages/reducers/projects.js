import * as ActionTypes from '../constants';

const initialState = {
    projects : [],
    loading: false, 
    error: null,
    projectDetail: [],
    

};

const projects =  (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOAD_PROJECTS_START:
    case ActionTypes.LOAD_PROJECT_DETAIL_START:

        return {
          ...state,
          loading: true,
        };
  
      case ActionTypes.LOAD_PROJECTS_SUCCESS:
        return {
            ...state,
            loading: false,
            projects: payload
        };

      case ActionTypes.LOAD_PROJECT_DETAIL_SUCCESS:
        return {
            ...state,
            loading: false,
            projectDetail: payload
        };
  
      case ActionTypes.LOAD_PROJECTS_ERROR:
      case ActionTypes.LOAD_PROJECT_DETAIL_ERROR:
        return {
          ...state,
          loading: false,
          error: payload
        }
    
    default:
      return state;
  }
};

export default projects;