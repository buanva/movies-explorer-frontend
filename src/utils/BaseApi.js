export default class BaseApi {
    constructor({ baseUrl, includeCredentials = true }) {
        this._baseUrl = baseUrl;
        this._includeCredentials = includeCredentials;
    }

    _send(path, method, body, headers) {
        const options = {
            method: method ? method : "GET",
            credentials: this._includeCredentials ? 'include' : 'omit'
        };
        if (body) {
            options.headers = {}
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(body);
        };
        if (headers) {
            options.headers = options.headers || {}
            for (const key in headers) {
                options.headers[key] = headers[key];
            };
        };
        return fetch(`${this._baseUrl}/${path}`, options)
            .then(res => res.ok ? res.json() : Promise.reject(res))
    }
};
