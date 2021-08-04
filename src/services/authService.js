import http from "./httpService";
import {apiUrl} from "../config.json";
import {toast} from "react-toastify";
//responsible for login and log

const apiEndpoint = apiUrl + "/auth";

export function login(email, password) {
    return http.post(apiEndpoint, {email, password});
    //this will log in the user on http.post  with email and password object
}