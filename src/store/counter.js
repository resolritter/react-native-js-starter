import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
  count: 1,
}

export default createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: function (state, { payload: { count } }) {
      state.count += count
      return state
    },
  },
})
