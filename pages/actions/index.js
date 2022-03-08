import * as types from "../constants";

export const loadProjectsStart = () => ({
    type: types.LOAD_PROJECTS_START,
});

export const loadProjectsSuccess = (projects) => ({
    type: types.LOAD_PROJECTS_SUCCESS,
    payload: projects,
});
export const loadProjectsError = (error) => ({
    type: types.LOAD_PROJECTS_ERROR,
    payload: error,
});

export const loadProjectDetailStart = () => ({
    type: types.LOAD_PROJECT_DETAIL_START,
});

export const loadProjectDetailSuccess = (projectDetail) => ({
    type: types.LOAD_PROJECT_DETAIL_SUCCESS,
    payload: projectDetail,
});
export const loadProjectDetailError = (error) => ({
    type: types.LOAD_PROJECT_DETAIL_ERROR,
    payload: error,
});

// ---- load news
export const loadNewsStart = () => ({
    type: types.LOAD_NEWS_START,
});

export const loadNewsSuccess = (news) => ({
    type: types.LOAD_NEWS_SUCCESS,
    payload: news,
});
export const loadNewsError = (error) => ({
    type: types.LOAD_NEWS_ERROR,
    payload: error,
});


// ----load carrer

export const loadCareersStart = () => ({
    type: types.LOAD_CAREERS_START,
});

export const loadCareersSuccess = (careers) => ({
    type: types.LOAD_CAREERS_SUCCESS,
    payload: careers,
});
export const loadCareersError = (error) => ({
    type: types.LOAD_CAREERS_ERROR,
    payload: error,
});