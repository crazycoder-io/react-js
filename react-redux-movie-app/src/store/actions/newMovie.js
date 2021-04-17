"use strict";
import axios from "axios";
import { ADD_MOVIE, ADD_MOVIE_FAIL, ADD_MOVIE_SUCCESS } from "../types";
import { API_URI } from "../../config/env";

export const newMovieSubmit = (movie) => {
  return (dispatch) => {
    dispatch({ type: ADD_MOVIE });
    axios
      .post(
        `${API_URI}/api/movies`,
        { ...movie },
        { headers: { "x-access-token": localStorage.getItem("token") } }
      )
      .then(({ data }) => {
        if (data.message) {
          dispatch({
            type: ADD_MOVIE_FAIL,
            payload: data.message,
          });
        } else {
          dispatch({
            type: ADD_MOVIE_SUCCESS,
            payload: data,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: ADD_MOVIE_FAIL,
          payload: error,
        });
      });
  };
};
