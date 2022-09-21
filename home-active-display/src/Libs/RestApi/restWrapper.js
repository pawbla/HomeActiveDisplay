export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

const LOCALHOST = "localhost";
const apiUrl = "api";

function request(method) {
    return (port, apiVersion, path, body) => {
        const requestOptions = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": LOCALHOST + port,
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, Origin, Content-Type, X-Auth-Token"
            }
        };
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }
        const url = `${LOCALHOST}:${port}/${apiUrl}/${apiVersion}/${path}`;
        return fetch(url, requestOptions).then(handleResponse);
    }
}

function handleResponse(response) {
    if (!response.ok) {
        const error = response.statusText;
        return Promise.reject(error);
    }
    return response.json();
}