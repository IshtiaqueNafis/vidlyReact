import http from "./httpService";
import config from  '../config.json'

export function getGenres() {
    return http.get(config.apiUrl +"/genres") // this is the axios parameter allows genres to be created by using put method
}