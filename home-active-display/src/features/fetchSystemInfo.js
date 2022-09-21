import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWrapper } from '../Libs/RestApi/restWrapper';
import { endpoints } from '../config';

const port = endpoints.monitoring.port;
const apiVersion = endpoints.monitoring.info.apiVersion;
const uri = endpoints.monitoring.info.uri;

export const getSystemInfo = createAsyncThunk(
    "monitoring/status",
    async () => await fetchWrapper.get(port, apiVersion, uri)
)

const systemInfoSlice = createSlice({
    name: 'fetchSystemInfo',
    initialState: {
      loading: true,
      payload: {},
      error: false
    },
    reducers: {},
    extraReducers: {
        [getSystemInfo.pending]: (state) => {
          state.loading = true
          state.error = false
        },
        [getSystemInfo.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.error = false
          state.payload = payload
        },
        [getSystemInfo.rejected]: (state, {error}) => {
          state.error = true
          state.loading = true
        },
      },
})

export const systemInfoReduced = systemInfoSlice.reducer;