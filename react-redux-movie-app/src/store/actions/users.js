"use strict";
import axios from "axios";
import { API_URI, API_USER } from "../../config/env";
import { API_URI as api_uri } from "../../config/env.production";

const PRODUCTION = process.env.NODE_ENV === "production" ? true : false;

export const authenticate = () => {
  return () => {
    axios
      .post(`${PRODUCTION ? api_uri : API_URI}/authenticate`, API_USER)
      .then(({ data }) => {
        if (data.status && data.token) {
          localStorage.setItem("token", data.token);
        }
      })
      .catch((error) => console.error(error));
  };
};
