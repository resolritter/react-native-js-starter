import React from "react"
import { View, Text } from "react-native"

import { styles } from "src/constants.js"

const Home = function () {
  return (
    <View style={[styles.flexCenterColumn]}>
      <Text>{"Example stacked page for navigation"}</Text>
    </View>
  )
}

export default Home
