import {weatherResp} from './weatherResponse'
import {sensorInfoResp} from './sensorInfoResponse'
import {monitoringResp} from './monitoringResponse'
import {validData, historyMonth, historyYear} from './historyResponse'

const weather_endpoint = "/weather/measurements"
const sensor_info_endpoint = "/weather/status"
const shutdown_hold_endpoint = "/monitoring/shutdown/hold"
const shutdown_restart_endpoint = "/monitoring/shutdown/restart"
const monitoring_endpoint = "/monitoring/status"
const history_valid_data_endpoint = "history/weather/validData"
const history_month_endpoint = "history/weather/month"
const history_year_endpoint = "history/weather/year"

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
                } else if (url.endsWith(monitoring_endpoint)) {
                    console.log("== MOCKED RESPONSE == Monitoring");
                    resolve({ ok: true, json: () => monitoringResp});
                } else if (url.endsWith(shutdown_hold_endpoint)) {
                    console.log("== MOCKED RESPONSE == Shutdown hold request");
                    resolve({ ok: true, json: () => {}});
                } else if (url.endsWith(shutdown_restart_endpoint)) {
                    console.log("== MOCKED RESPONSE == Shutdown restart request");
                    resolve({ ok: true, json: () => {}});    
                } else if (url.includes(history_valid_data_endpoint)) {
                    console.log("== MOCKED RESPONSE == History valid data");
                    resolve({ ok: true, json: () => validData});
                } else if (url.includes(history_month_endpoint)) {
                    console.log("== MOCKED RESPONSE == History month");
                    resolve({ ok: true, json: () => historyMonth});
                } else if (url.includes(history_year_endpoint)) {
                    console.log("== MOCKED RESPONSE == History year");
                    resolve({ ok: true, json: () => historyYear});
                } else {
                    console.log("== MOCKED RESPONSE == url not recognized" + url);
                    reject('Response from mock - Incorrect datas');
                }                
            }, 500);
        });
    }
}