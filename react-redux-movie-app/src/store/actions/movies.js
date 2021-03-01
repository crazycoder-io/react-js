"use strict";
import axios from "axios";
import { FETCH_MOVIES } from "../types";
import { API_URI } from "../../config/env";

export const fetchMovies = () => {
  return (dispatch) => {
    axios
      .get(`${API_URI}/api/movies`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then(({ data }) => {
        if (!data.status) {
          dispatch({
            type: FETCH_MOVIES,
            payload: data,
          });
        }
      })
      .catch((error) => console.log(error));
  };
};
