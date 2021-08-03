import http from "./httpService";

const apiEndpoint = "http://localhost:3900/api/movies"

export function getMovies() {
    return http.get(apiEndpoint) // this is the axios parameter allows genres to be created by using put method
    // by using get it will get all the object from the database.
}

export function deleteMovie(movieId) {
    return http.delete(apiEndpoint + '/' + movieId) // this is the axios parameter allows
    // this will delete movies from a datababse based on id provided
}