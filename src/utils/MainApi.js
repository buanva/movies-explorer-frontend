import BaseApi from "./BaseApi";
import { urlConstants } from "./constants";

class Api extends BaseApi {
    login(email, password) {
        return this._send('signin', 'POST', { email, password });
    }

    register(name, email, password) {
        return this._send('signup', 'POST', { name, email, password });
    }

    signout() {
        return this._send('signout', 'POST');
    }

    getCurrentUser() {
        return this._send('users/me');
    }

    updateUser(data) {
        return this._send('users/me', 'PATCH', data);
    }

    getAllMovies() {
        return this._send('movies');
    }

    addMovie(data) {
        return this._send('movies', 'POST', data);
    }

    deleteMovie(movieId) {
        return this._send(`movies/${movieId}`, 'DELETE');
    }
};

export const mainApi = new Api({
    baseUrl: urlConstants.mainApiBaseUrl
});
