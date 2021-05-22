"use strict";
import {
  ADD_MOVIE,
  ADD_MOVIE_FAIL,
  ADD_MOVIE_SUCCESS,
  FETCH_MOVIE,
  FETCH_MOVIE_FAIL,
  FETCH_MOVIE_SUCCESS,
  UPDATE_MOVIE,
  UPDATE_MOVIE_FAIL,
  UPDATE_MOVIE_SUCCESS,
} from "../types";

const INITIAL_STATE = {
  movie: {},
  error: null,
  loading: false,
  status: false,
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
        status: true,
      };
    case ADD_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_MOVIE:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.payload,
      };
    case FETCH_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
