"use strict";
import axios from "axios";
import { API_URI, API_USER } from "../../config/env";

export const authenticate = () => {
  return () => {
    axios
      .post(`${API_URI}/authenticate`, API_USER)
      .then(({ data }) => {
        if (data.status && data.token) {
          localStorage.setItem("token", data.token);
        }
      })
      .catch((error) => console.error(error));
  };
};
