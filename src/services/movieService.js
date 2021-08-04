import http from "./httpService";
import { apiUrl } from "../config.json";
import {toast} from "react-toastify";

const apiEndpoint = apiUrl + "/movies";

function movieUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function getMovies() {
    return http.get(apiEndpoint);
}

export function getMovie(movieId) {
    return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
    if (movie._id) {
        const body = { ...movie };
        delete body._id;
        toast.success("successfully updated movie ");
        return http.put(movieUrl(movie._id), body);
    }
    toast.success("successfully added a movie");
    return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
    toast.error("deletion sucessful")
    return http.delete(movieUrl(movieId));
}
