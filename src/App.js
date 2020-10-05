import "react-native-gesture-handler"
import React from "react"
import { Provider } from "react-redux"
import { ToastAndroid } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "./containers/Home.js"
import Example from "./containers/Example.js"
import setup from "./setup.js"
import { routes } from "src/constants.js"

const Stack = createStackNavigator()
const { store } = setup

const App = (props) => {
  React.useLayoutEffect(function () {
    ToastAndroid.show(
      // data sent from an intent will be displayed here
      props.data ?? Object.keys(props).toString(),
      ToastAndroid.SHORT,
    )
  }, [])

  return (
    <Provider {...{ store }}>
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
    </Provider>
  )
}

export default App
