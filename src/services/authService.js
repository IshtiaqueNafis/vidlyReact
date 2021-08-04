import http from "./httpService";
import {apiUrl} from "../config.json";
import {toast} from "react-toastify";
import jwtDecode from "jwt-decode";
import axios from "axios";
//responsible for login and log
http.setJwt(getJwt()) // getting the token
const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token" // this way varaible can be modified easuly.
export async function login(email, password) {
    const {data: jwt} = await http.post(apiEndpoint, {email, password}); // getting the jwt javaauthenticiation token from data server. and naming it as jwt

    localStorage.setItem(tokenKey, jwt) // then set the local storage based on key which is token and jwt is the property.
    //this will log in the user on http.post  with email and password object
    //region explanation -->localStorage.setItem("token", jwt)
    /* -> takes two parameter one is token another is jwt. */
    /*
     token is the key jwt is the value --> thus key value pair
    */
    //endregion
}

export function logout() {
    localStorage.removeItem(tokenKey); // this destorys the id
}

export function getCurrentUser() {

    try {
        const jwt = localStorage.getItem(tokenKey); // get the token of the logged in user
        return jwtDecode(jwt); // decode with jwtDecode. return the code

    } catch (exception) {
        return null; // return null when no match is found
    }
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt) // then set the local storage based on key which is token and jwt is the property.
}

export function getJwt() {
    return localStorage.getItem(tokenKey)
}


export default {
    login,
    logout,
    getCurrentUser,
    loginWithJwt,


}