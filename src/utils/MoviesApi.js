import BaseApi from "./BaseApi";
import { urlConstants } from "./constants";

class Api extends BaseApi {
    getMovies() {
        return this._send('');
    }
};

export const moviesApi = new Api({
    baseUrl: urlConstants.moviesApiUrl,
    includeCredentials: false
});
