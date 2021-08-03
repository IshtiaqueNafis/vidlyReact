import http from "./httpService";

export function getGenres() {
    return http.get("http://localhost:3900/api/genres") // this is the axios parameter allows genres to be created by using put method
}