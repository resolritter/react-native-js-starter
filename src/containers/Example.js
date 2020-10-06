import React from "react"
import { Button, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { styles } from "src/constants.js"
import counter from "src/store/counter.js"

const Home = function () {
  const count = useSelector(function ({ counter: { count: storeCount } }) {
    return storeCount
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
