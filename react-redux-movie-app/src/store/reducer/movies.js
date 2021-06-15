"use strict";
import {
  FETCH_MOVIES,
  FETCH_MOVIES_FAIL,
  FETCH_MOVIES_SUCCESS,
  DELETE_MOVIE,
  DELETE_MOVIE_FAIL,
  DELETE_MOVIE_SUCCESS,
} from "../types";

const INITIAL_STATE = {
  movies: [],
  error: null,
  loading: false,
  movie: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case FETCH_MOVIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_MOVIE:
      return {
        ...state,
        loading: true,
      };
    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: state.movies.filter((movie) => movie._id != action.payload),
      };
    case DELETE_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
