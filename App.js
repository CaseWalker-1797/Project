import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNav from './src/navigation/StackNav'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import DrawerNav from './src/navigation/DrawerNav'

const App = () => {
  return (
    <SafeAreaProvider>
      <DrawerNav />
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})