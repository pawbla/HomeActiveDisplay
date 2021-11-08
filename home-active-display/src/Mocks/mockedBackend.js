import {weatherResp} from './weatherResponse'

const weather_endpoint = "/weather/measurements"

export function mockedBackend() {
    window.fetch = function (url, data) {
        return new Promise((resolve, reject) => {
            console.log("== MOCKED RESPONSE == for url: " + url);
            setTimeout(() => {
                //Mock for fetching user data and log as admin
                if (url.endsWith(weather_endpoint)) {
                    console.log("== MOCKED RESPONSE == Weather service module");
                    resolve({ ok: true, json: () => weatherResp});
                } else {
                    console.log("== MOCKED RESPONSE == url not recognized" + url);
                    reject('Response from mock - Incorrect datas');
                }                
            }, 500);
        });
    }
}