import { configureStore } from '@reduxjs/toolkit'

import { weatherReduced } from './features/fetchWeather'
import { sensorInfoReduced } from './features/fetchSensorInfo'
import { systemInfoReduced } from './features/fetchSystemInfo'
import { validDataReduced, historyWeatherReducer } from './features/featchWeatherHistory'

export default configureStore({
  reducer: {
    fetchWeather: weatherReduced,
    fetchSensorInfo: sensorInfoReduced,
    fetchSystemInfo: systemInfoReduced,
    fetchHistoryValidData: validDataReduced,
    fetchWeatherHistoryData: historyWeatherReducer
  }
})