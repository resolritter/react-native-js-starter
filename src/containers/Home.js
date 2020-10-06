import React from "react"
import { Button, Text, View } from "react-native"
import { routes, styles } from "src/constants.js"

const Home = function ({ navigation }) {
  return (
    <View style={[styles.flexCenterColumn]}>
      <Text>{"Hello world!"}</Text>
      <Button
        onPress={function () {
          navigation.navigate(routes.example)
        }}
        title="Go to example page"
      />
    </View>
  )
}

export default Home
