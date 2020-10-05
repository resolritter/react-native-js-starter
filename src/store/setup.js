import { configureStore } from "@reduxjs/toolkit"
import counter from "./counter"

export default function (initialState) {
  const middleware = []
  const enhancers = []

  const store = configureStore({
    reducer: {
      counter: counter.reducer,
    },
    middleware,
    initialState,
    enhancers,
  })

  return { store }
}
