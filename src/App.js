import "react-native-gesture-handler"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { PermissionsAndroid, ToastAndroid } from "react-native"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { routes } from "src/constants.js"

import Example from "./containers/Example.js"
import Home from "./containers/Home.js"
import setup from "./setup.js"

const Stack = createStackNavigator()
const { store, persistor } = setup

const App = function (props) {
  React.useLayoutEffect(
    function () {
      ToastAndroid.show(
        `Intent: ${props.data ?? Object.keys(props).toString()}`,
        ToastAndroid.SHORT,
      )

      // _Needed_ for FilesystemStorage, can be removed otherwise
      const requestStorage = async function () {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: "External storage",
              message: "External storage",
              buttonNegative: "Cancel",
              buttonPositive: "OK",
            },
          )
          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            ToastAndroid.show(
              "Saving to the SD card will not work until the external storage permission is granted",
              ToastAndroid.SHORT,
            )
          }
        } catch (err) {
          console.warn(err)
        }
      }
      requestStorage()
    },
    [props],
  )

  return (
    <Provider {...{ store }}>
      <PersistGate loading={null} {...{ persistor }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={routes.home}
              component={Home}
              options={{
                header: () => false,
              }}
            />
            <Stack.Screen
              name={routes.example}
              component={Example}
              options={{
                header: () => false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App
