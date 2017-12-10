// import { combineReducers } from 'redux';
import * as types from './types';

// main
const mainInitialState = {
  is_loading: false
};
export const mainReducer = (state = mainInitialState, action) => {
  switch (action.type) {
    case types.MAIN__HIDE_LOADING:
      return {
        ...state,
        is_loading: false
      };

    case types.MAIN__SHOW_LOADING:
      return {
        ...state,
        is_loading: true
      };

    default:
      return state;
  }
};

// home
const homeInitialState = {
  info: {
    postCount: 0,
    memberCount: 0,
    commentCount: 0
  },
  error: undefined
};
export const homeReducer = (state = homeInitialState, action) => {
  switch (action.type) {
    case types.HOME__RECEIVE_INFO:
      return {
        ...state,
        info: action.info,
        error: undefined
      };

    case types.HOME__ERROR:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};

// post
const postInitialState = {
  detail: {},
  images: [],
  comments: [],
  error: undefined
};
export const postReducer = (state = postInitialState, action) => {
  switch (action.type) {
    case types.POST__RECEIVE_POST:
      return {
        ...state,
        detail: action.detail,
        error: undefined
      };

    case types.POST__RECEIVE_IMAGES:
      return {
        ...state,
        images: action.images
      };

    case types.POST__RECEIVE_COMMENTS:
      return {
        ...state,
        comments: action.comments
      };

    case types.POST__CLEAN_POST:
      return {
        ...state,
        detail: postInitialState.detail,
        images: postInitialState.images,
        comments: postInitialState.comments,
        error: undefined
      };

    case types.POST__ERROR:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};

// search
const searchInitialState = {
  posts: [],
  query: '',
  error: undefined
};
export const searchReducer = (state = searchInitialState, action) => {
  switch (action.type) {
    case types.SEARCH__SET_QUERY:
      return {
        ...state,
        query: action.query
      };

    case types.SEARCH__RECEIVE_POSTS:
      return {
        ...state,
        posts: action.posts,
        error: undefined
      };

    case types.SEARCH__ERROR:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};

// user
const userInitialState = {
  info: {},
  posts: [],
  error: undefined
}
export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case types.USER__RECEIVE_INFO:
      return {
        ...state,
        info: action.info,
        error: undefined
      };

    case types.USER__RECEIVE_POSTS:
      return {
        ...state,
        posts: action.posts
      };

    case types.USER__ERROR:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};

// stats
const statsInitialState = {
  chart: {},
  top: {},
  users: [],
  error: undefined
}
export const statsReducer = (state = statsInitialState, action) => {
  switch (action.type) {
    case types.STATS_STATISTICS__RECEIVE_CHART:
      return {
        ...state,
        chart: action.chart,
        error: undefined
      };

    case types.STATS_TOP__RECEIVE_LIST:
      return {
        ...state,
        top: action.top,
        error: undefined
      };

    case types.STATS_USER__RECEIVE_USERS:
      return {
        ...state,
        users: action.users,
        error: undefined
      };

    case types.STATS__ERROR:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}

//combineReducers
export default ({
  main: mainReducer,
  home: homeReducer,
  post: postReducer,
  search: searchReducer,
  user: userReducer,
  stats: statsReducer
});
