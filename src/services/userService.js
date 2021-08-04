import http from "./httpService";
import {apiUrl} from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
    return http.post(apiEndpoint, {
        email: user.username, // its called userName cause userName is userName is same.
        password: user.password,
        name: user.name


    })
    //region code explanation
    /*
    return  http.post(apiEndpoint, --> this means it will go to apiendpoint for http.post.which is for the users
    {
        email: user.username, // its called userName cause userName is userName is same.
        password: user.password,
        name: user.name
        }
        this means an object is being passed with email password and name
     */

    //endregion
}