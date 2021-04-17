"use strict";
import { ADD_MOVIE, ADD_MOVIE_FAIL, ADD_MOVIE_SUCCESS } from "../types";

const INITIAL_STATE = {
  movie: {},
  error: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        loading: true,
      };
    case ADD_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.payload,
      };
    case ADD_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
