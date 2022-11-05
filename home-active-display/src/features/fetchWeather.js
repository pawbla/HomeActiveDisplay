import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWrapper } from '../Libs/RestApi/restWrapper';
import { endpoints } from '../config';

const port = endpoints.weather.port;
const apiVersion = endpoints.weather.measurements.apiVersion;
const uri = endpoints.weather.measurements.uri;

export const getWeather = createAsyncThunk(
    "weather/measurements",
    async () => await fetchWrapper.get(port, apiVersion, uri)
)

const weatherSlice = createSlice({
    name: 'fetchWeather',
    initialState: {
      loading: true,
      payload: undefined,
      isReady: false
    },
    reducers: {},
    extraReducers: {
        [getWeather.pending]: (state) => {
          state.loading = true
        },
        [getWeather.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.isReady = true
          state.payload = payload
        },
        [getWeather.rejected]: (state, {error}) => {
          state.loading = true
        },
      },
})

export const weatherReduced = weatherSlice.reducer;