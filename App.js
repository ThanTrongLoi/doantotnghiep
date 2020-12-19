import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import BottomTabBar from './src/router/router'
import MyStatusBar from './src/components/myStatusBar'

const App = () => {

  return (
    <View style={styles.container}>
      {/* <MyStatusBar backgroundColor='#00701a' /> */}
      <BottomTabBar />
    </View>
  )
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})