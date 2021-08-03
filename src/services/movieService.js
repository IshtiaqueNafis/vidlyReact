import http from "./httpService";
import config from '../config.json'

// note that api url is from the json file
export function getMovies() {
    return http.get(config.apiUrl + "/movies") // this is the axios parameter allows genres to be created by using put method
    // by using get it will get all the object from the database.
}

export function getMovie(movieId) {
    return http.get(`${config.apiUrl}/movies/${movieId}`);//this gets a single movie from the database based on the id
}

export function saveMovie(movie){

}

export function deleteMovie(movieId) {
    return http.delete(config.apiUrl + '/' + movieId) // this is the axios parameter allows
    // this will delete movies from a datababse based on id provided
}