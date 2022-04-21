import axios from "axios";
import config from "../util/config";

const BASE_URL = config.BASE_URL;

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json",
    Authorization: config.JWT,
  },
  auth: {
    username: config.USUARIO,
    password: config.PASSWORD,
  },
});

export default client;
