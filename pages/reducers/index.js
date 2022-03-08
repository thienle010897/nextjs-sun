import { combineReducers } from 'redux';

import posts from './posts';
import projects from './projects';
import news from './news';
import careers from './careers';




// import router from './router';
// import socket from './socket';
// import orm from './orm';
// import auth from './auth';
// import core from './core';
// import authenticateForm from './forms/authenticate';
// import userCreateForm from './forms/user-create';
// import projectCreateForm from './forms/project-create';

export default combineReducers({
  posts,
  projects,
  news, 
  careers

  // router,
  // socket,
  // orm,
  // auth,
  // core,
  // authenticateForm,
  // userCreateForm,
  // projectCreateForm,
});
