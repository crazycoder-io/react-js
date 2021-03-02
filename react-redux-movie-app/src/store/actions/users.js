"use strict";
import axios from "axios";

const PRODUCTION = process.env.NODE_ENV === "production" ? true : false;

export const authenticate = () => {
  const { API_URI, API_USER } = PRODUCTION
    ? require("../../config/env.production")
    : require("../../config/env");
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
