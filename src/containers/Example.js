import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { View, Text, Button } from "react-native"

import counter from "src/store/counter.js"
import { styles } from "src/constants.js"

const Home = function () {
  const count = useSelector(function ({ counter: { count } }) {
    return count
  })
  const dispatch = useDispatch()

  return (
    <View style={[styles.flexCenterColumn]}>
      <Text>{"Example stacked page for navigation"}</Text>
      <Text>Count: {count}</Text>
      <Button
        onPress={function () {
          dispatch(counter.actions.increase({ count: 1 }))
        }}
        title="Increase count"
      />
    </View>
  )
}

export default Home
