export const endpoints = {
    weather: {
        port: "8082",
        sensorInfo: {
            apiVersion: "v1",
            uri: "weather/status"
        },
        measurements: {
            apiVersion: "v1",
            uri: "weather/measurements"
        },
    },
    monitoring: {
        port: "8085",
        shutdown: {
            apiVersion: "v1",
            uri: "monitoring/shutdown"
        },
        info: {
            apiVersion: "v1",
            uri: "monitoring/status"            
        }
    }
}