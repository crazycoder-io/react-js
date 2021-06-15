import {
  DELETE_MOVIE,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAIL,
} from "../types";
import { API_URI } from "../../config/env";
import axios from "axios";

export const deleteMovie = (id) => {
  return (dispatch) => {
    dispatch({ type: DELETE_MOVIE });
    axios
      .delete(`${API_URI}/api/movies/${id}`, {
        headers: { "x-access-token": localStorage.getItem("token") },
      })
      .then(({ data }) => {
        if (data.message) {
          dispatch({
            type: DELETE_MOVIE_FAIL,
            payload: data.message,
          });
        } else {
          dispatch({
            type: DELETE_MOVIE_SUCCESS,
            payload: id,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: DELETE_MOVIE_FAIL,
          payload: error,
        });
      });
  };
};
