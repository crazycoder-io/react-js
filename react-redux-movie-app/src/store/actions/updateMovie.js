"use strict";
import axios from "axios";
import {
  UPDATE_MOVIE,
  UPDATE_MOVIE_FAIL,
  UPDATE_MOVIE_SUCCESS,
} from "../types";
import { API_URI } from "../../config/env";

export const updateMovie = (id, movie) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_MOVIE });
    axios
      .put(
        `${API_URI}/api/movies/${id}`,
        { ...movie },
        { headers: { "x-access-token": localStorage.getItem("token") } }
      )
      .then(({ data }) => {
        if (data.message) {
          dispatch({
            type: UPDATE_MOVIE_FAIL,
            payload: data.message,
          });
        } else {
          dispatch({ type: UPDATE_MOVIE_SUCCESS });
        }
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_MOVIE_FAIL,
          payload: error,
        });
      });
  };
};
