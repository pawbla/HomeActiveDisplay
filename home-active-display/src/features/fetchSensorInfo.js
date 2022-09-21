import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWrapper } from '../Libs/RestApi/restWrapper';
import { endpoints } from '../config';

const port = endpoints.weather.port;
const apiVersion = endpoints.weather.sensorInfo.apiVersion;
const uri = endpoints.weather.sensorInfo.uri;

export const getSensorInfo = createAsyncThunk(
    "weather/status",
    async () => await fetchWrapper.get(port, apiVersion, uri)
)

const sensorInfoSlice = createSlice({
    name: 'fetchSensorInfo',
    initialState: {
      loading: true,
      payload: {}
    },
    reducers: {},
    extraReducers: {
        [getSensorInfo.pending]: (state) => {
          state.loading = true
        },
        [getSensorInfo.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.payload = payload
        },
        [getSensorInfo.rejected]: (state, {error}) => {
          state.loading = true
        },
      },
})

export const sensorInfoReduced = sensorInfoSlice.reducer;