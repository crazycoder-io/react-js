"use strict";
import axios from "axios";
import { API_URI } from "../../config/env";

export const authenticate = () => {
  return () => {
    axios
      .post(`${API_URI}/authenticate`, {
        userName: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD,
      })
      .then(({ data }) => {
        if (data.status && data.token) {
          localStorage.setItem("token", data.token);
        }
      })
      .catch((error) => console.error(error));
  };
};
