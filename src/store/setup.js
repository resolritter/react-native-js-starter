import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import FilesystemStorage from "redux-persist-filesystem-storage"
import RNFetchBlob from "rn-fetch-blob"
import { appName } from "src/constants"

import counter from "./counter"

// Saving to the SDCard won't work with just this due to lacking permissions on
// Android; the needed clearance will be requested during the App's
// initialization lifecycle (check App.js for that).
FilesystemStorage.config({
  // Defines the _folder_ location where the backup file will be saved to.
  storagePath: `${RNFetchBlob.fs.dirs.SDCardDir}/${appName}`,
})

const reducer = persistReducer(
  {
    key: "store",
    version: 1,
    storage: FilesystemStorage,
  },
  combineReducers({ counter: counter.reducer }),
)

export default function (initialState) {
  const persistorRef = { current: undefined }
  const middleware = []
  const enhancers = []

  // Declare after which actions should the store automatically be flushed to
  // the filesystem.
  const persistAfter = [counter.actions.increase]
  const automaticPersistenceMiddleware = () => (next) => (action) => {
    const result = next(action)
    if (persistAfter.some((actionCreator) => actionCreator.match(action))) {
      persistorRef.current.flush()
    }
    return result
  }
  middleware.push(automaticPersistenceMiddleware)

  const store = configureStore({
    reducer,
    middleware,
    initialState,
    enhancers,
  })

  persistorRef.current = persistStore(store)

  return { store, persistor: persistorRef.current }
}
