import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWrapper } from '../Libs/RestApi/restWrapper';
import { endpoints } from '../config';

const port = endpoints.history.port;
const apiVersionValueDate = endpoints.history.validData.apiVersion;
const uriValueDate = endpoints.history.validData.uri;
const apiVersionData = endpoints.history.data.apiVersion
const urlData = endpoints.history.data.uri

export const getValidData = createAsyncThunk(
    "history/valid",
    async () => await fetchWrapper.get(port, apiVersionValueDate, uriValueDate)
)

export const getWeatherHistory = createAsyncThunk(
  "history/weather",
  async (props) => await fetchWrapper.get(port, apiVersionData, getHistoryUrl(props.type, props.measurement, props.year, props.month))
)

const getHistoryUrl = (type, measurement, year, month) => {
  let url = urlData.concat(type).concat("?type=").concat(measurement).concat("&year=").concat(year);
  if (type === "month") {
    url = url.concat("&month=").concat(month);
  }
  return url;
}

const validDataSlice = createSlice({
    name: 'fetchHistoryValidData',
    initialState: {
      loading: true,
      payload: {}
    },
    reducers: {},
    extraReducers: {
        [getValidData.pending]: (state) => {
          state.loading = true
        },
        [getValidData.fulfilled]: (state, { payload }) => {
          state.loading = false
          state.payload = payload
        },
        [getValidData.rejected]: (state, {error}) => {
          state.loading = true
        },
      },
})

const weatherHistorySlice = createSlice({
  name: 'fetchWeatherHistoryData',
  initialState: {
    loading: true,
    payload: {}
  },
  reducers: {
    reset(state) {
      state.payload = {}
    }
  },
  extraReducers: {
      [getWeatherHistory.pending]: (state) => {
        state.loading = true
      },
      [getWeatherHistory.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.payload = payload
      },
      [getWeatherHistory.rejected]: (state, {error}) => {
        state.loading = true
      },
    },
})

export const validDataReduced = validDataSlice.reducer;
export const historyWeatherReducer = weatherHistorySlice.reducer;
export const { reset } = weatherHistorySlice.actions

