"use strict";
import axios from "axios";
import {
  FETCH_MOVIES,
  FETCH_MOVIES_FAIL,
  FETCH_MOVIES_SUCCESS,
} from "../types";
import { API_URI } from "../../config/env";

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_MOVIES });
    axios
      .get(`${API_URI}/api/movies`)
      .then(({ data }) => {
        if (data.message) {
          dispatch({
            type: FETCH_MOVIES_FAIL,
            payload: data.message,
          });
        } else {
          dispatch({
            type: FETCH_MOVIES_SUCCESS,
            payload: data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: FETCH_MOVIES_FAIL,
          payload: error,
        });
      });
  };
};
