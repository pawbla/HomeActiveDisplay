const getRefDate = (i) => {
  let dateTime = new Date();
  dateTime.setMinutes(0);
  dateTime.setSeconds(0)
  dateTime.setMilliseconds(0);
  dateTime.setHours(dateTime.getHours() - i);
  return dateTime.toISOString();
} 

export const weatherResp = {"airPolution":{
    "pm25percent":{
      "isError":false,
      "value":"68"},
    "pm10percent":{
      "isError":false,
      "value":"62"},
    "pm25":{
      "isError":false,
      "value":"17"},
    "pm1":{
      "isError":false,
      "value":"13"},
    "caqiColor":{
      "isError":false,
      "value":"#D1CF1E"},
    "caqi":{
      "isError":true,
      "value":"31"},
    "pm10":{
      "isError":false,
      "value":"31"},
    "forecast": {
      "isError": false,
      "values": [
        {
          "date": "2019-10-05T16:00:00.000Z",
          "caqi": "20",
          "caqiColour": "#6BC926"
        },
        {
          "date": "2019-10-05T17:00:00.000Z",
          "caqi": "31",
          "caqiColour": "#D1CF1E"
        },
        {
          "date": "2019-10-05T18:00:00.000Z",
          "caqi": "32",
          "caqiColour": "#D1CF1E"
        },
        {
          "date": "2019-10-05T19:00:00.000Z",
          "caqi": "33",
          "caqiColour": "#D1CF1E"
        },
        {
          "date": "2019-10-05T20:00:00.000Z",
          "caqi": "34",
          "caqiColour": "#D1CF1E"
        },
        {
          "date": "2019-10-05T21:00:00.000Z",
          "caqi": "35",
          "caqiColour": "#D1CF1E"
        },
        {
          "date": "2019-10-05T22:00:00.000Z",
          "caqi": "35",
          "caqiColour": "#D1CF1E"
        },
        {
          "date": "2019-10-05T23:00:00.000Z",
          "caqi": "34",
          "caqiColour": "#D1CF1E"
        },
        {
          "date": "2019-10-06T00:00:00.000Z",
          "caqi": "34",
          "caqiColour": "#D1CF1E"
        },
        {
          "date": "2019-10-06T01:00:00.000Z",
          "caqi": "33",
          "caqiColour": "#D1CF1E"
        },
        {
          "date": "2019-10-06T02:00:00.000Z",
          "caqi": "32",
          "caqiColour": "#D1CF1E"
        },
        {
          "date": "2019-10-06T03:00:00.000Z",
          "caqi": "30",
          "caqiColour": "#D1CF1E"
        },
        {
          "date": "2019-10-06T04:00:00.000Z",
          "caqi": "28",
          "caqiColour": "#D1CF1E"
        },
        {
          "date": "2019-10-06T05:00:00.000Z",
          "caqi": "26",
          "caqiColour": "#D1CF1E"
        },
        {
          "date": "2019-10-06T06:00:00.000Z",
          "caqi": "24",
          "caqiColour": "#6BC926"
        },
        {
          "date": "2019-10-06T07:00:00.000Z",
          "caqi": "22",
          "caqiColour": "#6BC926"
        },
        {
          "date": "2019-10-06T08:00:00.000Z",
          "caqi": "20",
          "caqiColour": "#6BC926"
        },
        {
          "date": "2019-10-06T09:00:00.000Z",
          "caqi": "19",
          "caqiColour": "#6BC926"
        },
        {
          "date": "2019-10-06T10:00:00.000Z",
          "caqi": "19",
          "caqiColour": "#6BC926"
        },
        {
          "date": "2019-10-06T11:00:00.000Z",
          "caqi": "19",
          "caqiColour": "#6BC926"
        },
        {
          "date": "2019-10-06T12:00:00.000Z",
          "caqi": "19",
          "caqiColour": "#6BC926"
        },
        {
          "date": "2019-10-06T13:00:00.000Z",
          "caqi": "19",
          "caqiColour": "#6BC926"
        },
        {
          "date": "2019-10-06T14:00:00.000Z",
          "caqi": "20",
          "caqiColour": "#6BC926"
        },
        {
          "date": "2019-10-06T15:00:00.000Z",
          "caqi": "21",
          "caqiColour": "#6BC926"
        }
      ]
    }
  },
  "moon":{
    "text":{
      "isError":false,
      "value":"Przybywający sierp"},
    "picture":{
      "isError":false,
      "value":"1"}
    },
    "in":{
      "temperature":{
        "isError":true,
        "value":"1"},
      "humidity":{
        "isError":false,
        "value":"35"}
    },
    "weather":{
      "ceiling":{
        "isError":true,
        "value":"457"},
      "isPrecipation": {
        "isError": false,
        "value": false},
      "precipationType": {
        "isError": false,
        "value": ""},  
      "isDayTime": {
        "isError": false,
        "value": true},      
      "windDirectionDeg":{
        "isError":false,
        "value":"45"},
      "weatherIcon":{
        "isError":false,
        "value":"7"},
      "visibility":{
        "isError":false,
        "value":"10"},
      "cloudCover":{
        "isError":false,
        "value":"77"},
      "uvIndexDescription":{
        "isError":false,
        "value":"Niska"},
      "uvIndexColor":{
        "isError":false,
        "value":"#ffc800"},
      "pressure":{
        "isError":false,
        "value":"1007"},
      "windDirection":{
        "isError":false,
        "value":"NE"},
      "windSpeed":{
        "isError":false,
        "value":"18"},
      "uvIndexValue":{
        "isError":false,
        "value":"7"},
      "weatherText":{
        "isError":false,
        "value":"Czesciowo slonecznie "}
    },
    "history": {
      "isError": false,
      "pressure": [
          {
              "date": getRefDate(24),
              "value": "1016"
          },
          {
              "date": getRefDate(23),
              "value": "1017"
          },
          {
              "date": getRefDate(22),
              "value": "1018"
          },
          {
              "date": getRefDate(21),
              "value": "1019"
          },
          {
              "date": getRefDate(20),
              "value": "1020"
          },
          {
              "date": getRefDate(19),
              "value": "1021"
          },
          {
              "date": getRefDate(18),
              "value": "1022"
          },
          {
              "date": getRefDate(17),
              "value": "1023"
          },
          {
              "date": getRefDate(16),
              "value": "1024"
          },
          {
              "date": getRefDate(15),
              "value": "1001"
          },
          {
              "date": getRefDate(14),
              "value": "1002"
          },
          {
              "date": getRefDate(13),
              "value": "1003"
          },
          {
              "date": getRefDate(12),
              "value": "1004"
          },
          {
              "date": getRefDate(11),
              "value": "1005"
          },
          {
              "date":  getRefDate(10),
              "value": "1006"
          },
          {
              "date":  getRefDate(9),
              "value": "1007"
          },
          {
              "date":  getRefDate(8),
              "value": "1008"
          },
          {
              "date":  getRefDate(7),
              "value": "1009"
          },
          {
              "date":  getRefDate(6),
              "value": "1010"
          },
          {
              "date":  getRefDate(5),
              "value": "1011"
          },
          {
              "date":  getRefDate(4),
              "value": "1012"
          },
          {
              "date":  getRefDate(3),
              "value": "1013"
          },
          {
              "date":  getRefDate(2),
              "value": "1014"
          },
          {
              "date":  getRefDate(1),
              "value": "1015"
          }
      ]
  },
    "sun":{
      "dayLength":{
        "isError":false,
        "value":"11:23"},
      "set":{
        "isError":false,
        "value":"18:10"},
      "rise":{
        "isError":false,
        "value":"06:46"}
    },
    "out":{
      "temperature":{
        "isError":false,
        "value":"9"},
      "humidity":{
        "isError":false,
        "value":"95"}
    }
  }

 
  