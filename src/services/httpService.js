import axios from "axios";
import logger from "./logService";
import {toast} from "react-toastify";
import auth from "./authService";

axios.defaults.headers.common['x-auth-token'] = auth.getJwt()
// this is the default headers
// sets headers on post,get or delete for any request
axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        logger.log(error);
        toast.error("An unexpected error occurrred.");
    }

    return Promise.reject(error);
});

export default {
    get: axios.get, // this is for getting the data thus makes it easy for the user to get data
    post: axios.post, // this is for creating data
    put: axios.put, // this just changes the one request
    delete: axios.delete // this just deletes one thing.
};