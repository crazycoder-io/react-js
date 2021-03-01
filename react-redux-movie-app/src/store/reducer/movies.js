"use strict";
import { FETCH_MOVIES } from "../types";

const INITIAL_STATE = {
  movies: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};
