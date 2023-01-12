export const sensorInfoResp = {
    "connectors":[
      {
        "date": "2023-01-11T19:06:13Z",
        "okResponseDate": "2023-01-11T19:06:13Z",
        "isError":false,
        "provider":"Internal DHT22",
        "name":"internal",
        "link":"",
        "errorMessage":"",
        "responseCode":200
      },{
        "date": "2023-01-11T19:06:13Z",
        "okResponseDate": "2023-01-11T19:06:13Z",
        "isError":false,
        "provider":"AccuWeather",
        "name":"accuweather",
        "link":"https://www.accuweather.com/",
        "errorMessage":"",
        "responseCode":200,
        "dailyCounter": {
          "requests": 1,
          "errors": 1
        },
        "sumCounter": {
          "requests": 11,
          "errors": 3
        }
      },{
        "date": "2023-01-11T19:06:13Z",
        "okResponseDate": "2023-01-11T19:06:13Z",
        "isError":false,
        "provider":"Sunrise Sunset",
        "name":"sun",
        "link":"https://sunrise-sunset.org/",
        "errorMessage":"",
        "responseCode":200,
        "dailyCounter": {
          "requests": 3,
          "errors": 1
        },
        "sumCounter": {
          "requests": 12,
          "errors": 5
        }
      },{
        "date": "2023-01-11T19:06:13Z",
        "okResponseDate": "2023-01-12T19:06:13Z",
        "isError":true,
        "provider":"AirLy",
        "name":"airLy",
        "link":"https://www.airly.eu/",
        "errorMessage":"Some problems mocked info test response yeah",
        "responseCode":401,
        "dailyCounter": {
          "requests": 15,
          "errors": 5
        },
        "sumCounter": {
          "requests": 22,
          "errors": 6
        }
      }
    ]
  }