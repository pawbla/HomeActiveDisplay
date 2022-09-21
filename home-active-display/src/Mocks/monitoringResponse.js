export const monitoringResp = {
    "hardware": {
        "platformLabel": "Raspberry Pi",
        "platformId": "raspberrypi",
        "cpuRevision": "7",
        "cpuArchitecture": "7",
        "modelName": "ARMv6-compatible processor rev 7 (v6l)",
        "processor": "0",
        "boardTypeName": "RaspberryPi_B_Plus",
        "cpuTemperature": 0.0,
        "cpuVoltage": 0.0,
        "dateTime": "2022-09-26T19:40:34"
    },
    "os": {
        "name": "Linux",
        "version": "5.10.92+",
        "architecture": "arm",
        "firmwareBuild": "",
        "firmwareDate": ""
    },
    "network": {
        "hostName": "raspberrypi",
        "ipAddress": [
            "11.16.1.3"
        ],
        "fqdn": [
            "raspberrypi"
        ],
        "nameserver": [
            "11.16.1.4"
        ]
    },
    "memory": {
        "total": 450506752,
        "used": 304001024,
        "free": 47030272,
        "shared": 425984,
        "buffers": 99475456,
        "cached": 95240192
    },
    "java": {
        "vendor": "Raspbian",
        "vendorUrl": "http://java.oracle.com/",
        "version": "1.8.0_312",
        "virtualMachinve": "OpenJDK Client VM",
        "runtime": "OpenJDK Runtime Environment"
    },
    "applications": [
        {
            "port": "8082",
            "name": "weather-service-module",
            "version": "1.0-SNAPSHOT",
            "health": true,
            "dateTime": "2022-09-26T19:40:10"
        },
        {
            "port": "8083",
            "name": "embedded-sensor-module",
            "version": "1.0-SNAPSHOT",
            "health": false,
            "dateTime": "2022-09-26T19:40:15"
        }
    ]
}