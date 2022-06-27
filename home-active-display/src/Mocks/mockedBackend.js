import {weatherResp} from './weatherResponse'
import {sensorInfoResp} from './sensorInfoResponse'

const weather_endpoint = "/weather/measurements"
const sensor_info_endpoint = "/weather/status"
const shutdown_endpoint = "/monitoring/shutdown"

export function mockedBackend() {
    window.fetch = function (url, data) {
        return new Promise((resolve, reject) => {
            console.log("== MOCKED RESPONSE == for url: " + url);
            setTimeout(() => {
                //Mock for fetching user data and log as admin
                if (url.endsWith(weather_endpoint)) {
                    console.log("== MOCKED RESPONSE == Weather service module");
                    resolve({ ok: true, json: () => weatherResp});
                } else if (url.endsWith(sensor_info_endpoint)) {
                    console.log("== MOCKED RESPONSE == Sensor Info");
                    resolve({ ok: true, json: () => sensorInfoResp});
                } else if (url.endsWith(shutdown_endpoint)) {
                    console.log("== MOCKED RESPONSE == Shutdown request");
                    resolve({ ok: true, json: () => {}});
                } else {
                    console.log("== MOCKED RESPONSE == url not recognized" + url);
                    reject('Response from mock - Incorrect datas');
                }                
            }, 500);
        });
    }
}